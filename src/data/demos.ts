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
        url: 'https://spr1nklr.lovable.app/',
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
        url: 'https://lumapad.lovable.app/',
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
    },
    {
        id: 'ambient-weather-art',
        title: 'Ambient Weather Art',
        description: 'A dynamic, interactive art installation that transforms real-time weather data into mesmerizing visual experiences with camera integration and silhouette effects.',
        shortDescription: 'Dynamic weather-driven visual art installation',
        icon: '🌤️',
        url: 'https://jasonhand.github.io/ambient_weather_art/',
        githubUrl: 'https://github.com/jasonhand/ambient_weather_art',
        tags: ['Weather', 'Art', 'Visualization', 'Interactive', 'Camera'],
        status: 'live',
        gradient: 'accent',
        featured: true,
        createdAt: '2024-04-10',
        techStack: ['HTML5 Canvas', 'JavaScript', 'WebRTC', 'Ambient Weather API'],
        features: [
            'Real-time weather data visualization',
            'Dynamic disc grid animations',
            'Camera silhouette detection',
            'Weather chaos indicators',
            'Day/night cycle adaptation'
        ],
        category: 'visualization',
        difficulty: 'advanced'
    },
    {
        id: 'ai-dev-challenge',
        title: 'AI Dev Challenge Hub',
        description: 'A React-based dashboard for tracking GitHub repositories as they evolve through the AI Dev Challenge. Features repository tracking, challenge timeline, real-time stats, and GitHub integration.',
        shortDescription: 'Track GitHub repos in the AI Dev Challenge',
        icon: '🧑‍💻',
        url: 'https://jasonhand.github.io/ai_dev_challenge/',
        githubUrl: 'https://github.com/jasonhand/ai_dev_challenge',
        tags: ['AI', 'Dashboard', 'GitHub', 'Challenge', 'React'],
        status: 'live',
        gradient: 'primary',
        featured: true,
        createdAt: '2024-07-10',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        features: [
            'Repository tracking',
            'Challenge timeline',
            'Real-time statistics',
            'URL sharing',
            'Admin panel',
            'Datadog RUM integration'
        ],
        category: 'ai',
        difficulty: 'intermediate',
        // Screenshot: public/images/screenshots/ai_dev_challenge_hub.png
    },
    {
        id: 'ambient-weather',
        title: 'Ambient Weather Dashboard',
        description: 'A dashboard for visualizing and monitoring real-time weather data from Ambient Weather stations. Features device management, data visualization, and API integration.',
        shortDescription: 'Real-time Ambient Weather dashboard',
        icon: '🌦️',
        url: 'https://ambient-weather.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/ambient-weather',
        tags: ['Weather', 'Dashboard', 'Visualization', 'API'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-07-10',
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'Ambient Weather API'],
        features: [
            'Device management',
            'Real-time weather data',
            'Data visualization',
            'API integration'
        ],
        category: 'visualization',
        difficulty: 'intermediate',
        // Screenshot: public/images/screenshots/ambient_weather_dashboard.png
    },
    {
        id: 'markdown-viewer',
        title: 'Markdown Viewer',
        description: 'A simple, lightweight markdown previewer inspired by YiViewer. Instantly preview markdown files as HTML with auto-update and export features.',
        shortDescription: 'Lightweight markdown previewer',
        icon: '📄',
        url: 'https://jasonhand.github.io/markdown_viewer/',
        githubUrl: 'https://github.com/jasonhand/markdown_viewer',
        tags: ['Markdown', 'Viewer', 'Preview', 'HTML'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-07-10',
        techStack: ['Objective-C', 'HTML5', 'CSS3'],
        features: [
            'Auto-update preview',
            'No dependencies',
            'Export HTML',
            'Lightweight design'
        ],
        category: 'utility',
        difficulty: 'beginner',
        // Screenshot: public/images/screenshots/markdown_viewer.png
    },
    {
        id: 'pomodoro-writer',
        title: 'Pomodoro Writer',
        description: 'A focused writing application that combines the Pomodoro Technique with a distraction-free writing environment for maximum productivity.',
        shortDescription: 'Focused writing with Pomodoro technique',
        icon: '⏰',
        url: 'https://jasonhand.github.io/pomodoro_writer/',
        githubUrl: 'https://github.com/jasonhand/pomodoro_writer',
        tags: ['Productivity', 'Writing', 'Pomodoro', 'Focus'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
        features: [
            'Pomodoro timer integration',
            'Distraction-free writing',
            'Progress tracking',
            'Session statistics'
        ],
        category: 'utility',
        difficulty: 'beginner'
    },
    {
        id: 'video-scope',
        title: 'VideoScope',
        description: 'An elite video analysis tool that provides insights and analytics for video content with advanced tracking and visualization features.',
        shortDescription: 'Elite video analysis and insights tool',
        icon: '📹',
        url: 'https://video-scope-elite-insights.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/video-scope-elite-insights',
        tags: ['Video', 'Analytics', 'Insights', 'Analysis'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['React', 'TypeScript', 'Video APIs', 'Analytics'],
        features: [
            'Video content analysis',
            'Performance insights',
            'Advanced tracking',
            'Data visualization'
        ],
        category: 'visualization',
        difficulty: 'intermediate'
    },
    {
        id: 'do-it-lady',
        title: 'Do it lady!',
        description: 'An empowering task management and motivation application designed to help users accomplish their goals with encouragement and tracking.',
        shortDescription: 'Empowering task management app',
        icon: '💪',
        url: 'https://jasonhand.github.io/doitlady/',
        githubUrl: 'https://github.com/jasonhand/doitlady',
        tags: ['Task Management', 'Motivation', 'Productivity', 'Empowerment'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
        features: [
            'Task creation and tracking',
            'Motivational messages',
            'Progress visualization',
            'Goal setting'
        ],
        category: 'utility',
        difficulty: 'beginner'
    },
    {
        id: 'bills-blitz',
        title: 'Bills Blitz',
        description: 'A fast-paced card game focused on bill management and financial literacy with engaging gameplay and educational elements.',
        shortDescription: 'Fast-paced bill management card game',
        icon: '💳',
        url: 'https://blitz-card-chase.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/blitz-card-chase',
        tags: ['Card Game', 'Finance', 'Education', 'Gaming'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['React', 'TypeScript', 'Game Logic', 'CSS Animations'],
        features: [
            'Fast-paced gameplay',
            'Financial education',
            'Card-based mechanics',
            'Progress tracking'
        ],
        category: 'entertainment',
        difficulty: 'intermediate'
    },
    {
        id: 'hero-scope',
        title: 'HeroScope Command Center',
        description: 'A command center interface for managing and monitoring hero-based operations with real-time data and control systems.',
        shortDescription: 'Hero operations command center',
        icon: '🦸',
        url: 'https://hero-scope-command-center.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/hero-scope-command-center',
        tags: ['Command Center', 'Operations', 'Monitoring', 'Hero'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['React', 'TypeScript', 'Real-time Data', 'Dashboard'],
        features: [
            'Real-time monitoring',
            'Command interface',
            'Data visualization',
            'Operation tracking'
        ],
        category: 'web',
        difficulty: 'advanced'
    },
    {
        id: 'collatz-conjecture',
        title: 'Collatz Conjecture Visualizer',
        description: 'An interactive visualization of the famous Collatz conjecture mathematical problem with dynamic graphing and pattern analysis.',
        shortDescription: 'Interactive Collatz conjecture visualization',
        icon: '🔢',
        url: 'https://jasonhand.github.io/collatz_conjecture/',
        githubUrl: 'https://github.com/jasonhand/collatz_conjecture',
        tags: ['Mathematics', 'Visualization', 'Conjecture', 'Patterns'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['HTML5 Canvas', 'JavaScript', 'Math.js', 'D3.js'],
        features: [
            'Interactive visualization',
            'Pattern analysis',
            'Dynamic graphing',
            'Mathematical accuracy'
        ],
        category: 'visualization',
        difficulty: 'advanced'
    },
    {
        id: 'pokemon-battle',
        title: 'Pokémon Game Theory Battle Arena',
        description: 'A strategic battle arena where players can test game theory concepts using Pokémon characters and battle mechanics.',
        shortDescription: 'Strategic Pokémon battle arena',
        icon: '⚔️',
        url: 'https://jasonhand.github.io/pokemon_battle/',
        githubUrl: 'https://github.com/jasonhand/pokemon_battle',
        tags: ['Pokémon', 'Game Theory', 'Strategy', 'Battle'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['React', 'TypeScript', 'Game Theory', 'Pokémon API'],
        features: [
            'Strategic battles',
            'Game theory implementation',
            'Pokémon mechanics',
            'Battle analysis'
        ],
        category: 'entertainment',
        difficulty: 'intermediate'
    },
    {
        id: 'openweathermap',
        title: 'OpenWeatherMap',
        description: 'A weather application that displays current and forecast weather data using the OpenWeatherMap API with beautiful visualizations.',
        shortDescription: 'Weather app with OpenWeatherMap API',
        icon: '🌤️',
        url: 'https://jasonhand.github.io/openweathermap_demo/',
        githubUrl: 'https://github.com/jasonhand/openweathermap_demo',
        tags: ['Weather', 'API', 'Forecast', 'Visualization'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['JavaScript', 'OpenWeatherMap API', 'HTML5', 'CSS3'],
        features: [
            'Current weather display',
            'Forecast data',
            'Location-based weather',
            'Beautiful visualizations'
        ],
        category: 'web',
        difficulty: 'beginner'
    },
    {
        id: 'scam-url-detector',
        title: 'Scam URL Detector',
        description: 'A security tool that analyzes URLs to detect potential scams and malicious websites using advanced detection algorithms.',
        shortDescription: 'URL scam detection and analysis tool',
        icon: '🛡️',
        url: 'https://jasonhand.github.io/scam_url_detector/',
        githubUrl: 'https://github.com/jasonhand/scam_url_detector',
        tags: ['Security', 'URL Analysis', 'Scam Detection', 'Safety'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['JavaScript', 'URL Analysis', 'Security APIs', 'HTML5'],
        features: [
            'URL analysis',
            'Scam detection',
            'Security scoring',
            'Detailed reports'
        ],
        category: 'utility',
        difficulty: 'intermediate'
    },
    {
        id: 'star-wars-trivia',
        title: 'Star Wars Character Trivia Game',
        description: 'An interactive trivia game featuring Star Wars characters with questions, scoring, and character information.',
        shortDescription: 'Interactive Star Wars character trivia',
        icon: '⭐',
        url: 'https://jasonhand.github.io/star_wars_trivia/',
        githubUrl: 'https://github.com/jasonhand/star_wars_trivia',
        tags: ['Star Wars', 'Trivia', 'Game', 'Characters'],
        status: 'live',
        gradient: 'primary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['JavaScript', 'Star Wars API', 'HTML5', 'CSS3'],
        features: [
            'Character trivia questions',
            'Scoring system',
            'Character information',
            'Interactive gameplay'
        ],
        category: 'entertainment',
        difficulty: 'beginner'
    },
    {
        id: 'ms-learn-quiz',
        title: 'Microsoft Learn Quiz',
        description: 'An educational quiz application based on Microsoft Learn content with interactive questions and progress tracking.',
        shortDescription: 'Microsoft Learn educational quiz',
        icon: '📚',
        url: 'https://learn-glass-quiz.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/learn-glass-quiz',
        tags: ['Education', 'Microsoft', 'Quiz', 'Learning'],
        status: 'live',
        gradient: 'secondary',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['React', 'TypeScript', 'Microsoft Learn API', 'Quiz Engine'],
        features: [
            'Interactive quizzes',
            'Progress tracking',
            'Microsoft Learn content',
            'Educational feedback'
        ],
        category: 'education',
        difficulty: 'intermediate'
    },
    {
        id: 'keyboard-speed-test',
        title: 'Datadog Typing Test',
        description: 'A typing speed and accuracy test application with Datadog integration for performance monitoring and analytics.',
        shortDescription: 'Typing speed test with Datadog integration',
        icon: '⌨️',
        url: 'https://jasonhand.github.io/keyboard_speed_test/',
        githubUrl: 'https://github.com/jasonhand/keyboard_speed_test',
        tags: ['Typing', 'Speed Test', 'Datadog', 'Analytics'],
        status: 'live',
        gradient: 'accent',
        featured: false,
        createdAt: '2024-07-15',
        techStack: ['JavaScript', 'Datadog RUM', 'HTML5', 'CSS3'],
        features: [
            'Typing speed measurement',
            'Accuracy tracking',
            'Datadog integration',
            'Performance analytics'
        ],
        category: 'utility',
        difficulty: 'beginner'
    },
    {
        id: 'ecco-ocean-visualization',
        title: 'ECCO Ocean Visualization',
        description: 'A 3D globe and 2D map visualization for exploring ocean currents, temperature, salinity, and sea level using ECCO v4r4 data. Features interactive controls, region selection, time playback, and data quality statistics.',
        shortDescription: 'Interactive ECCO ocean data globe & map',
        icon: '🌊',
        url: 'https://ecco-ocean-explorer-globe.lovable.app/',
        githubUrl: 'https://github.com/jasonhand/ecco-ocean-explorer-globe',
        tags: ['Ocean', 'Visualization', 'Climate', '3D', 'ECCO', 'Globe', 'Data'],
        status: 'live',
        gradient: 'accent',
        featured: true,
        createdAt: '2024-04-27',
        techStack: ['React', 'Three.js', 'TypeScript', 'Netlify', 'Astro'],
        features: [
            '3D globe and 2D map views',
            'Ocean current, temperature, salinity, and sea level layers',
            'Region and time selection',
            'Data quality and statistics',
            'Export and share features'
        ],
        category: 'visualization',
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