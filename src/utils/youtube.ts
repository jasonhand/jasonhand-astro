/**
 * Utility functions for fetching YouTube video data
 * 
 * SETUP INSTRUCTIONS:
 * 
 * Option 1 (Recommended - No API Key Required):
 *   - Find the YouTube playlist ID for AI Tools Lab videos
 *   - Set environment variable: AI_TOOLS_LAB_PLAYLIST_ID=YOUR_PLAYLIST_ID
 *   - This will automatically fetch the latest video from the playlist
 * 
 * Option 2 (Requires API Key):
 *   - Get a YouTube Data API v3 key from Google Cloud Console
 *   - Set environment variable: YOUTUBE_API_KEY=your_api_key
 *   - This will fetch the latest video from @datadogcommunity channel
 * 
 * Option 3 (Manual Fallback):
 *   - Set environment variable: AI_TOOLS_LAB_FALLBACK_VIDEO_ID=video_id
 *   - This will use a specific video ID if automatic fetch fails
 * 
 * To find a playlist ID:
 *   - Go to the YouTube playlist page
 *   - Look at the URL: youtube.com/playlist?list=PLAYLIST_ID_HERE
 *   - Or right-click on the playlist and "Copy playlist URL"
 */

export interface YouTubeVideo {
    videoId: string;
    title: string;
    publishedAt: string;
    thumbnail: string;
}

/**
 * Get the latest video from a specific YouTube playlist using RSS feed
 * This is the simplest approach - no API key required
 * 
 * @param playlistId - YouTube playlist ID (e.g., 'PLjR8CqndeyMq9NMYN_Hkto8WHr30ZZCuI')
 * @returns Latest video info or null if not found
 */
export async function getLatestVideoFromPlaylist(playlistId: string): Promise<YouTubeVideo | null> {
    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
        const response = await fetch(rssUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch playlist RSS: ${response.status}`);
        }
        
        const xmlText = await response.text();
        
        // Parse XML to get latest video (first entry in RSS feed)
        // Extract video ID from <yt:videoId> tag
        const videoIdMatch = xmlText.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const titleMatch = xmlText.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
        const publishedMatch = xmlText.match(/<published>(.*?)<\/published>/);
        const thumbnailMatch = xmlText.match(/<media:thumbnail url="(.*?)"/);
        
        if (!videoIdMatch) {
            return null;
        }
        
        return {
            videoId: videoIdMatch[1],
            title: titleMatch ? titleMatch[1] : 'Latest Video',
            publishedAt: publishedMatch ? publishedMatch[1] : new Date().toISOString(),
            thumbnail: thumbnailMatch ? thumbnailMatch[1] : ''
        };
    } catch (error) {
        console.error('Error fetching latest video from playlist:', error);
        return null;
    }
}

/**
 * Get the latest AI Tools Lab video
 * 
 * Options (in order of priority):
 * 1. Use playlist ID from environment variable (AI_TOOLS_LAB_PLAYLIST_ID)
 * 2. Use default playlist ID for AI Tools Lab
 * 3. Use YouTube Data API if key is available (YOUTUBE_API_KEY)
 * 4. Manual fallback video ID (AI_TOOLS_LAB_FALLBACK_VIDEO_ID)
 * 
 * @returns Latest video info or null if not found
 */
export async function getLatestAIToolsLabVideo(): Promise<YouTubeVideo | null> {
    // Option 1: Use playlist ID from env or default (easiest, no API key needed)
    const playlistId = import.meta.env.AI_TOOLS_LAB_PLAYLIST_ID || 'PLVOmGuoGYFgr5lvPwWpsEFm-QU_FvxzJ0';
    const video = await getLatestVideoFromPlaylist(playlistId);
    if (video) {
        return video;
    }
    
    // Option 2: Use YouTube Data API if key is available (fallback)
    const apiKey = import.meta.env.YOUTUBE_API_KEY;
    if (apiKey) {
        const apiVideo = await getLatestVideoFromChannelAPI('@datadogcommunity', apiKey);
        if (apiVideo) {
            return apiVideo;
        }
    }
    
    // Option 3: Manual fallback - return null so you can set a default video ID
    return null;
}

/**
 * Get the latest YouTube Shorts video
 * 
 * Options (in order of priority):
 * 1. Use playlist ID from environment variable (YOUTUBE_SHORTS_PLAYLIST_ID)
 * 2. Use default playlist ID for YouTube Shorts
 * 3. Manual fallback video ID (YOUTUBE_SHORTS_FALLBACK_VIDEO_ID)
 * 
 * @returns Latest video info or null if not found
 */
export async function getLatestYouTubeShortsVideo(): Promise<YouTubeVideo | null> {
    // Option 1: Use playlist ID from env or default (easiest, no API key needed)
    const playlistId = import.meta.env.YOUTUBE_SHORTS_PLAYLIST_ID || 'PLjR8CqndeyMofFphEh7jUHUfjzkjiStwl';
    const video = await getLatestVideoFromPlaylist(playlistId);
    if (video) {
        return video;
    }
    
    // Option 2: Manual fallback - return null so you can set a default video ID
    return null;
}

/**
 * Get the latest video from a YouTube channel using YouTube Data API v3
 * Requires YOUTUBE_API_KEY environment variable
 * 
 * @param channelHandle - YouTube channel handle (e.g., '@datadogcommunity')
 * @param apiKey - YouTube Data API v3 key
 * @returns Latest video info or null if not found
 */
async function getLatestVideoFromChannelAPI(channelHandle: string, apiKey: string): Promise<YouTubeVideo | null> {
    try {
        // First, get channel ID from handle
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(channelHandle)}&type=channel&key=${apiKey}&maxResults=1`
        );
        
        if (!channelResponse.ok) {
            throw new Error('Failed to fetch channel info');
        }
        
        const channelData = await channelResponse.json();
        if (!channelData.items || channelData.items.length === 0) {
            return null;
        }
        
        const channelId = channelData.items[0].snippet.channelId;
        
        // Get uploads playlist ID
        const channelDetailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        
        if (!channelDetailsResponse.ok) {
            throw new Error('Failed to fetch channel details');
        }
        
        const channelDetails = await channelDetailsResponse.json();
        const uploadsPlaylistId = channelDetails.items[0].contentDetails.relatedPlaylists.uploads;
        
        // Get latest video from uploads playlist
        const videosResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${apiKey}&maxResults=1&order=date`
        );
        
        if (!videosResponse.ok) {
            throw new Error('Failed to fetch videos');
        }
        
        const videosData = await videosResponse.json();
        if (!videosData.items || videosData.items.length === 0) {
            return null;
        }
        
        const video = videosData.items[0].snippet;
        
        return {
            videoId: video.resourceId.videoId,
            title: video.title,
            publishedAt: video.publishedAt,
            thumbnail: video.thumbnails.high?.url || video.thumbnails.default?.url || ''
        };
    } catch (error) {
        console.error('Error fetching latest video from API:', error);
        return null;
    }
}
