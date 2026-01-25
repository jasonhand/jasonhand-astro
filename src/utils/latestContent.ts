import type { BlogPost } from '../types';
import { getAllBlogPosts } from '../data/blog';

export interface LatestContent {
    id: string;
    title: string;
    type: 'blog' | 'podcast' | 'video' | 'publication' | 'guest-appearance';
    date: string;
    url: string;
    description?: string;
    image?: string;
    icon?: string;
    show?: string; // For guest appearances, the show name
    videoId?: string; // YouTube video ID for guest appearances or videos
}

/**
 * Get the latest content from all sources, sorted by date
 */
export function getLatestContent(limit: number = 6): LatestContent[] {
    const content: LatestContent[] = [];

    // Get latest blog posts
    const blogPosts = getAllBlogPosts().slice(0, 3);
    blogPosts.forEach(post => {
        content.push({
            id: post.id,
            title: post.title,
            type: 'blog',
            date: post.publishedAt,
            url: `/blog/${post.id}`,
            description: post.excerpt,
            icon: '📝'
        });
    });

    // Add latest podcast episodes (Community Pulse)
    const podcastEpisodes: LatestContent[] = [
        {
            id: 'cp-102',
            title: '2025 End of Year Wrap-Up',
            type: 'podcast',
            date: '2026-01-07',
            url: 'https://www.communitypulse.io/episodes',
            description: 'Reflecting on our 2025 DevRel conversations and the themes that defined the year.',
            icon: '🎙️'
        },
        {
            id: 'cp-101',
            title: 'Non-tech Communities That Inform Our DevRel Activities',
            type: 'podcast',
            date: '2025-11-07',
            url: 'https://www.communitypulse.io/episodes',
            description: 'How lived experiences inform our work in the Developer Relations world.',
            icon: '🎙️'
        },
        {
            id: 'cp-100',
            title: "What's Changed Since the Community Pulse Started!",
            type: 'podcast',
            date: '2025-09-26',
            url: 'https://www.communitypulse.io/episodes',
            description: 'Celebrating 10 years and 100 episodes with Jono Bacon and SJ Morris.',
            icon: '🎙️'
        }
    ];
    content.push(...podcastEpisodes);

    // Add guest appearances
    const guestAppearances: LatestContent[] = [
        {
            id: 'sdi-115',
            title: 'The AI Tools Lab, conferences, devrel',
            type: 'guest-appearance',
            date: '2025-12-10',
            url: 'https://www.softwaredefinedinterviews.com/115',
            description: 'Whitney and Coté chat with Jason about organizing conferences, AI Tools Lab, and DevRel.',
            icon: '🎙️',
            show: 'Software Defined Interviews',
            videoId: '1jxmNoWv9WU'
        }
    ];
    content.push(...guestAppearances);

    // Sort by date (newest first)
    content.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Return limited results
    return content.slice(0, limit);
}

/**
 * Get the latest guest appearance
 * @returns Latest guest appearance or null if not found
 */
export function getLatestGuestAppearance(): LatestContent | null {
    const allContent = getLatestContent(100); // Get more to find guest appearances
    const guestAppearances = allContent.filter(item => item.type === 'guest-appearance');
    
    if (guestAppearances.length === 0) {
        return null;
    }
    
    // Already sorted by date (newest first), so return the first one
    return guestAppearances[0];
}
