// Batch screenshot capture script
// This script contains the remaining demos that need screenshots

const remainingDemos = [
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
  { id: 'error-tracking-demo', url: 'https://jasonhand.github.io/error_tracking_demo/' },
  { id: 'markov-chain', url: 'https://jasonhand.github.io/markov_chain/' },
  { id: 'transcription-to-json', url: 'https://jasonhand.github.io/transcription_2_JSON/' },
  { id: 'hummingbirds', url: 'https://jasonhand.github.io/hummingbirds/' },
  { id: 'dunbars-number', url: 'https://jasonhand.github.io/dunbars_number/' }
];

// Already captured: ai-tools-lab-quiz, lissajous-demo, lifx-app, ai-dev-challenge,
// ambient-weather, ecco-ocean-visualization, core-web-vitals, app-demo-showcase, pareto-principle

console.log(`Remaining demos to capture: ${remainingDemos.length}`);
remainingDemos.forEach((demo, index) => {
  console.log(`${index + 1}. ${demo.id} - ${demo.url}`);
});

module.exports = remainingDemos;