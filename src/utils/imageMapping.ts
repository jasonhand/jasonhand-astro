// Mapping function to convert demo IDs to image filenames
export function getDemoImagePath(demoId: string): string {
    // Map demo IDs to their corresponding image filenames
    const imageMapping: Record<string, string> = {
        'ai-dev-challenge': 'ai_dev_challenge_hub',
        'ambient-weather': 'ambient_weather_dashboard',
        'markdown-viewer': 'markdown_viewer',
        'festy-packer': 'festy_packer',
        'see-ya-there': 'seeyathere',
        'split-sumthin': 'split_sumthin',
        'ai-tools-lab-quiz': 'ai_tools_quiz',
        'toroidal-field': 'toroidal_field',
        'pspsps': 'pspsps',
        'camp-tribute': 'camp_tribute',
        'spr1nklr': 'spr1nklr',
        'devops-certified': 'devops_certified',
        'lissajous-demo': 'lissajous_curves',
        'jhand-tv': 'jhand_tv',
        'star-gazer': 'star_gazer',
        'ignite-karaoke': 'ignite_karaoke',
        'vinyl-viewer': 'vinyl_viewer',
        'doggo-explorer': 'doggo_explorer',
        'sup-destinations': 'sup_destinations',
        'lifx-app': 'lumapad',
        'ambient-weather-art': 'ambient_weather_art'
    };

    const imageName = imageMapping[demoId] || demoId;
    return `/images/screenshots/${imageName}.png`;
} 