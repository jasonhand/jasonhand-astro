// Script to capture screenshots for missing demos
const demos = [
  { id: 'pomodoro-writer', url: 'https://jasonhand.github.io/pomodoro_writer/' },
  { id: 'video-scope', url: 'https://video-scope-elite-insights.lovable.app/' },
  { id: 'do-it-lady', url: 'https://jasonhand.github.io/doitlady/' },
  { id: 'bills-blitz', url: 'https://blitz-card-chase.lovable.app/' },
  { id: 'hero-scope', url: 'https://hero-scope-command-center.lovable.app/' },
  { id: 'collatz-conjecture', url: 'https://jasonhand.github.io/collatz_conjecture/' },
  { id: 'pokemon-battle', url: 'https://jasonhand.github.io/pokemon_battle/' },
  { id: 'openweathermap', url: 'https://jasonhand.github.io/openweathermap_demo/' },
  { id: 'scam-url-detector', url: 'https://jasonhand.github.io/scam_url_detector/' },
  { id: 'star-wars-trivia', url: 'https://jasonhand.github.io/star_wars_trivia/' },
  { id: 'ms-learn-quiz', url: 'https://learn-glass-quiz.lovable.app/' },
  { id: 'keyboard-speed-test', url: 'https://jasonhand.github.io/keyboard_speed_test/' },
  { id: 'vinyl-zenith', url: 'https://vinylviewer.com/' },
  { id: 'lyric-lounge-ipad', url: 'https://pickinpartner.com/' },
  { id: 'ai-energy-impact', url: 'https://jasonhand.github.io/ai-engery-impact/' },
  { id: 'robots-txt-generator', url: 'https://jasonhand.github.io/robots-txt-generator/' },
  { id: 'devcast-nexus-discover', url: 'https://devcast-nexus-discover.lovable.app/' },
  { id: 'ecco-ocean-visualization', url: 'https://ecco-ocean-explorer-globe.lovable.app/' },
  { id: 'core-web-vitals', url: 'https://jasonhand.github.io/core_web_vitals/' },
  { id: 'error-tracking-demo', url: 'https://jasonhand.github.io/error_tracking_demo/' },
  { id: 'app-demo-showcase', url: 'https://jasonhand.github.io/app_demo_showcase/' },
  { id: 'markov-chain', url: 'https://jasonhand.github.io/markov_chain/' },
  { id: 'transcription-to-json', url: 'https://jasonhand.github.io/transcription_2_JSON/' },
  { id: 'pareto-principle', url: 'https://jasonhand.github.io/pareto_principle/' },
  { id: 'hummingbirds', url: 'https://jasonhand.github.io/hummingbirds/' },
  { id: 'dunbars-number', url: 'https://jasonhand.github.io/dunbars_number/' }
];

console.log('Demos to capture screenshots for:');
demos.forEach((demo, index) => {
  console.log(`${index + 1}. ${demo.id} - ${demo.url}`);
});