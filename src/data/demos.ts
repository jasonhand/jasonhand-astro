export interface Demo {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: string;
    url: string;
    githubUrl?: string;
    tags: string[];
    status: 'live' | 'development' | 'preview';
    gradient: 'primary' | 'secondary' | 'accent';
    featured: boolean;
    createdAt: string; // ISO date string
    techStack?: string[];
    features?: string[];
    category: 'web' | 'ai' | 'visualization' | 'utility' | 'entertainment' | 'education';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const demos: Demo[] = [
    {
        id: 'festy-packer',
        title: 'Festy Packer',
        description: 'A comprehensive festival packing and planning tool to help you prepare for your next adventure.',
        shortDescription: 'Festival packing and planning tool',
        icon: '🎒',
        url: 'https://festypacker.com',
        tags: ['Festival', 'Planning', 'Organization', 'Travel'],
        status: 'live',
        gradient: 'primary',
        featured: true,
        createdAt: '2024-01-15',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
        features: [
            'Interactive packing lists',
            'Festival-specific recommendations',
            'Weather integration',
            'Collaborative planning'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'see-ya-there',
        title: 'See Ya There',
        description: 'A location-based event discovery platform that helps you find and connect with local events and activities in your area.',
        shortDescription: 'Location-based event discovery platform',
        icon: '👋',
        url: 'https://seeyathere.co/',
        tags: ['Events', 'Location', 'Social', 'Discovery'],
        status: 'live',
        gradient: 'secondary',
        featured: true,
        createdAt: '2024-01-20',
        techStack: ['Next.js', 'TypeScript', 'Mapbox', 'Vercel'],
        features: [
            'Location-based event discovery',
            'Real-time event updates',
            'Social sharing',
            'Event recommendations'
        ],
        category: 'web',
        difficulty: 'advanced'
    },
    {
        id: 'split-sumthin',
        title: 'Split Sumthin',
        description: 'An intuitive expense splitting and bill management application for groups and roommates.',
        shortDescription: 'Expense splitting and bill management',
        icon: '💰',
        url: 'https://splitsumthin.com/',
        tags: ['Finance', 'Expenses', 'Groups', 'Bills'],
        status: 'live',
        gradient: 'accent',
        featured: true,
        createdAt: '2024-01-25',
        techStack: ['Vue.js', 'JavaScript', 'CSS', 'Firebase'],
        features: [
            'Expense tracking',
            'Group bill splitting',
            'Payment history',
            'Settlement calculations'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'ai-tools-lab-quiz',
        title: 'AI Tools Lab Quiz',
        description: 'An interactive quiz game testing knowledge of AI tools and technologies in an engaging format.',
        shortDescription: 'Interactive AI tools knowledge challenge',
        icon: '🤖',
        url: 'https://ai-tools-lab.com/quiz-challenge',
        tags: ['AI', 'Quiz', 'Learning', 'Education'],
        status: 'live',
        gradient: 'primary',
        featured: true,
        createdAt: '2024-02-01',
        techStack: ['React', 'TypeScript', 'AI APIs', 'Vercel'],
        features: [
            'Interactive quiz interface',
            'AI-powered questions',
            'Progress tracking',
            'Leaderboard system'
        ],
        category: 'ai',
        difficulty: 'beginner'
    },
    {
        id: 'toroidal-field',
        title: 'Toroidal Field',
        description: 'Interactive visualization of toroidal fields with real-time parameter controls and mathematical patterns.',
        shortDescription: 'Mathematical field visualization',
        icon: '🌀',
        url: 'https://jasonhand.github.io/toroidal_fields',
        tags: ['Math', 'Visualization', 'Physics', 'Animation'],
        status: 'live',
        gradient: 'secondary',
        featured: true,
        createdAt: '2024-02-05',
        techStack: ['Canvas API', 'JavaScript', 'WebGL', 'Math.js'],
        features: [
            'Real-time field visualization',
            'Parameter controls',
            'Mathematical accuracy',
            'Performance optimization'
        ],
        category: 'visualization',
        difficulty: 'advanced'
    },
    {
        id: 'pspsps',
        title: 'PsPsPs',
        description: 'A playful interactive application that brings joy through cat-themed interactions and delightful animations.',
        shortDescription: 'Playful cat-themed interactive app',
        icon: '🐱',
        url: 'https://pspsps.app/',
        githubUrl: 'https://github.com/jasonhand/pspsps',
        tags: ['Fun', 'Interactive', 'Cats', 'Animation'],
        status: 'live',
        gradient: 'accent',
        featured: true,
        createdAt: '2024-02-10',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
        features: [
            'Interactive cat animations',
            'Sound effects',
            'Responsive design',
            'Progressive enhancement'
        ],
        category: 'entertainment',
        difficulty: 'beginner'
    },
    {
        id: 'camp-tribute',
        title: 'Camp Tribute',
        description: 'A comprehensive camping and outdoor adventure planner for nature enthusiasts and outdoor explorers.',
        shortDescription: 'Camping and outdoor adventure planner',
        icon: '🏕️',
        url: 'https://camptribute.com/',
        tags: ['Camping', 'Outdoor', 'Adventure', 'Planning'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-02-15',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
        features: [
            'Camping site finder',
            'Gear recommendations',
            'Weather integration',
            'Trip planning tools'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'spr1nklr',
        title: 'Spr1nklr',
        description: 'A watering system visualizer and planner for efficient garden and landscape irrigation management.',
        shortDescription: 'Watering system visualizer and planner',
        icon: '💧',
        url: 'https://watering-works-visualizer.lovable.app/',
        tags: ['Garden', 'Irrigation', 'Visualization', 'Planning'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-02-20',
        techStack: ['React', 'Three.js', 'WebGL', 'Vercel'],
        features: [
            '3D system visualization',
            'Water flow simulation',
            'Zone planning',
            'Efficiency calculations'
        ],
        category: 'visualization',
        difficulty: 'advanced'
    },
    {
        id: 'devops-certified',
        title: 'DevOps Certified',
        description: 'A comprehensive DevOps certification practice platform with interactive learning modules and assessments.',
        shortDescription: 'DevOps certification practice platform',
        icon: '🏆',
        url: 'https://jasonhand.github.io/devops_certified/',
        tags: ['DevOps', 'Certification', 'Learning', 'Practice'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-02-25',
        techStack: ['Vue.js', 'JavaScript', 'CSS', 'GitHub Pages'],
        features: [
            'Practice exams',
            'Progress tracking',
            'Study materials',
            'Performance analytics'
        ],
        category: 'education',
        difficulty: 'intermediate'
    },
    {
        id: 'lissajous-demo',
        title: 'Lissajous Curves',
        description: 'Interactive visualization of Lissajous curves with real-time parameter controls and beautiful mathematical patterns.',
        shortDescription: 'Mathematical visualization with interactive controls',
        icon: '🌀',
        url: 'https://jasonhand.github.io/Lissajous-Demo/',
        githubUrl: 'https://github.com/jasonhand/Lissajous-Demo',
        tags: ['Math', 'Visualization', 'Animation', 'Canvas'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-03-01',
        techStack: ['HTML5 Canvas', 'JavaScript', 'Math.js', 'GitHub Pages'],
        features: [
            'Real-time curve generation',
            'Parameter controls',
            'Mathematical accuracy',
            'Smooth animations'
        ],
        category: 'visualization',
        difficulty: 'intermediate'
    },
    {
        id: 'jhand-tv',
        title: 'Jhand.tv',
        description: 'A curated collection of vintage videos with a beautiful, nostalgic interface and video player.',
        shortDescription: 'Vintage video collection and player',
        icon: '📺',
        url: 'https://jasonhand.github.io/vintage-videos/',
        tags: ['Vintage', 'Videos', 'Collection', 'Nostalgia'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-03-05',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Video API'],
        features: [
            'Video collection browsing',
            'Nostalgic interface design',
            'Responsive video player',
            'Category organization'
        ],
        category: 'entertainment',
        difficulty: 'beginner'
    },
    {
        id: 'star-gazer',
        title: 'Star Gazer',
        description: 'A comprehensive stargazing guide and planner specifically designed for Boulder, Colorado astronomy enthusiasts.',
        shortDescription: 'Boulder stargazing guide and planner',
        icon: '⭐',
        url: 'https://boulder-stargazer-guide.lovable.app/',
        tags: ['Astronomy', 'Boulder', 'Stargazing', 'Planning'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-03-10',
        techStack: ['React', 'TypeScript', 'Astronomy APIs', 'Vercel'],
        features: [
            'Star visibility predictions',
            'Weather integration',
            'Location-specific data',
            'Event calendar'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'ignite-karaoke',
        title: 'Ignite Karaoke',
        description: 'A JavaScript-powered karaoke application with real-time lyrics display and interactive audio controls.',
        shortDescription: 'JavaScript-powered karaoke with lyrics',
        icon: '🎤',
        url: 'https://jasonhand.github.io/js-ignite-karaoke/',
        githubUrl: 'https://github.com/jasonhand/js-ignite-karaoke',
        tags: ['Karaoke', 'Audio', 'JavaScript', 'Interactive'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-03-15',
        techStack: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS3'],
        features: [
            'Real-time lyrics display',
            'Audio synchronization',
            'Interactive controls',
            'Song library'
        ],
        category: 'entertainment',
        difficulty: 'intermediate'
    },
    {
        id: 'vinyl-viewer',
        title: 'Vinyl Viewer',
        description: 'A beautiful interface for browsing and displaying vinyl record collections with detailed album information and artwork.',
        shortDescription: 'Beautiful vinyl record collection browser',
        icon: '💿',
        url: 'https://jasonhand.github.io/vinyl-viewer/',
        githubUrl: 'https://github.com/jasonhand/vinyl-viewer',
        tags: ['Music', 'Collection', 'Visualization', 'Vinyl'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-03-20',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
        features: [
            'Album browsing interface',
            'High-quality artwork display',
            'Collection organization',
            'Search and filter'
        ],
        category: 'entertainment',
        difficulty: 'beginner'
    },
    {
        id: 'doggo-explorer',
        title: 'Doggo Explorer',
        description: 'An interactive dog breed discovery application with detailed information and beautiful breed photography.',
        shortDescription: 'Interactive dog breed discovery app',
        icon: '🐕',
        url: 'https://jasonhand.github.io/doggo-explorer/',
        tags: ['Dogs', 'Breeds', 'Interactive', 'Discovery'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-03-25',
        techStack: ['React', 'JavaScript', 'CSS', 'Dog API'],
        features: [
            'Breed information database',
            'Interactive breed cards',
            'Search and filter',
            'Beautiful photography'
        ],
        category: 'web',
        difficulty: 'beginner'
    },
    {
        id: 'sup-destinations',
        title: 'SUP Destinations',
        description: 'A comprehensive guide to stand-up paddleboarding destinations throughout Colorado (currently in development).',
        shortDescription: 'Colorado SUP destinations guide (in development)',
        icon: '🏄',
        url: 'https://colorado-sup-destinations.lovable.app',
        tags: ['SUP', 'Colorado', 'Destinations', 'Outdoor'],
        status: 'development',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-04-01',
        techStack: ['React', 'TypeScript', 'Mapbox', 'Vercel'],
        features: [
            'Destination mapping',
            'Difficulty ratings',
            'Weather integration',
            'User reviews'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'lifx-app',
        title: 'LIFX App',
        description: 'A smart lighting control interface for LIFX bulbs with advanced automation and scene management (currently in development).',
        shortDescription: 'Smart lighting control interface (in development)',
        icon: '💡',
        url: 'https://glow-pad-control.lovable.app/',
        tags: ['Smart Home', 'Lighting', 'Automation', 'IoT'],
        status: 'development',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-04-05',
        techStack: ['React', 'TypeScript', 'LIFX API', 'WebSocket'],
        features: [
            'Bulb control interface',
            'Scene management',
            'Automation rules',
            'Real-time updates'
        ],
        category: 'web',
        difficulty: 'advanced'
    }
];

// Helper functions
export function getFeaturedDemos(): Demo[] {
    return demos.filter(demo => demo.featured);
}

export function getAllDemos(): Demo[] {
    return demos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getDemosByCategory(category: Demo['category']): Demo[] {
    return demos.filter(demo => demo.category === category);
}

export function getDemosByStatus(status: Demo['status']): Demo[] {
    return demos.filter(demo => demo.status === status);
}

export function getDemoById(id: string): Demo | undefined {
    return demos.find(demo => demo.id === id);
}

export function getRecentDemos(limit: number = 5): Demo[] {
    return getAllDemos().slice(0, limit);
} 