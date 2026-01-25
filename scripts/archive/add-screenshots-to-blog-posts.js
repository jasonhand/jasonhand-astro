import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the image mapping function logic
function getDemoImagePath(demoId) {
    const imageMapping = {
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
        'ignite-karaoke': 'ignite_karaoke',
        'vinyl-viewer': 'vinyl_viewer',
        'doggo-explorer': 'doggo_explorer',
        'lifx-app': 'lumapad',
        'ambient-weather-art': 'ambient_weather_art',
        'pomodoro-writer': 'PomodoroWriter',
        'video-scope': 'VideoScope',
        'do-it-lady': 'DoItLady',
        'bills-blitz': 'Bills_Blitz',
        'hero-scope': 'HeroScope',
        'collatz-conjecture': 'CollatzConjecture',
        'pokemon-battle': 'PokemonBattle',
        'openweathermap': 'OpenWeatherMap',
        'scam-url-detector': 'Scam_url_detector',
        'star-wars-trivia': 'StarWarsTrivia',
        'ms-learn-quiz': 'MSLearnQuiz',
        'keyboard-speed-test': 'KeyboardSpeedTest',
        'space-time-language': 'space-time-language',
        'zeta-3': 'zeta-3',
        'network-diagnostics': 'network-diagnostics',
        'btc-price-wrapper': 'btc-price-wrapper',
        'datadog-toto-simulator': 'datadog-toto-simulator',
        'magic-eye-generator': 'magic_eye_generator',
        'vinyl-zenith': 'my_vinyl_collection',
        'lyric-lounge-ipad': 'pickinpartner',
        'guitar-triads': 'guitar_triads',
        'music-theory-lessons': 'music_theory_lessons',
        'technical-debt': 'technical_debt',
        'klein-bottle': 'klein_bottle',
        '3d-logo-viewer': '3d_logo_viewer',
        'perceptron': 'perceptron',
        'backpropagation': 'backpropagation',
        'stardust': 'stardust',
        'ai-energy-impact': 'ai_energy_consumption',
        'robots-txt-generator': 'robot_txt_generator',
        'faulty-deployment-detection': 'faulty_deployment_detection',
        'ecco-ocean-visualization': 'ECCO',
        'plinko-drop': 'plinko_drop',
        'family-tree-archive': 'family_tree_archive',
        'markov-chain': 'markov_chain',
        'gif-maker': 'gif_maker',
        'retro-programming-sim': 'retro_programming_sim',
        'transcription-to-json': 'transcription_to_json',
        'hummingbirds': 'hummingbirds',
        'dunbars-number': 'dunbars_number',
        'pareto-principle': 'pareto_principle',
        'core-web-vitals': 'core_web_vitals',
        'app-demo-showcase': 'app_demo_showcase',
        'error-tracking-demo': 'error_tracking_demo'
    };

    const imageName = imageMapping[demoId] || demoId.replace(/-/g, '_');
    return `/images/screenshots/${imageName}.png`;
}

// Get all demo blog posts
const blogDir = join(__dirname, '../src/content/blog');
const files = readdirSync(blogDir).filter(f => f.endsWith('-demo.md'));

let updatedCount = 0;

for (const file of files) {
    const filePath = join(blogDir, file);
    const content = readFileSync(filePath, 'utf-8');
    
    // Extract demo ID from filename (e.g., "3d-logo-viewer-demo.md" -> "3d-logo-viewer")
    const demoId = file.replace('-demo.md', '');
    
    // Get the screenshot path
    const screenshotPath = getDemoImagePath(demoId);
    
    // Check if screenshot already exists in the content
    if (content.includes(screenshotPath) || content.includes('![Screenshot]')) {
        console.log(`Skipping ${file} - screenshot already present`);
        continue;
    }
    
    // Parse frontmatter and body
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if (!frontmatterMatch) {
        console.log(`⚠️  Skipping ${file} - invalid frontmatter`);
        continue;
    }
    
    const frontmatter = frontmatterMatch[1];
    const body = frontmatterMatch[2];
    
    // Create the screenshot markdown (add it right after frontmatter, before body)
    const screenshotMarkdown = `![Screenshot of ${demoId.replace(/-/g, ' ')}](${screenshotPath})\n\n`;
    
    // Reconstruct the file with screenshot added
    const newContent = `---\n${frontmatter}\n---\n\n${screenshotMarkdown}${body}`;
    
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Updated ${file} with screenshot`);
    updatedCount++;
}

console.log(`\n✅ Updated ${updatedCount} blog posts with screenshots`);
