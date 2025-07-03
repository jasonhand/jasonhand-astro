import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for the new demo page style
const newTemplate = (demoId, demoTitle) => `---
import Layout from '../../layouts/Layout.astro';
import { getDemoById } from '../../data/demos';

const demo = getDemoById('${demoId}');
if (!demo) {
    return Astro.redirect('/demos');
}
---

<Layout title={\`\${demo.title} - Demo - Jason Hand\`}>
  <section class="section py-16">
    <div class="max-w-3xl mx-auto">
      <img src="/images/screenshots/${demoId.replace(
          /-/g,
          '_'
      )}.png" alt="${demoTitle} Screenshot" class="rounded-xl shadow-lg mb-8 w-full h-auto" loading="lazy" />
      <h1 class="gradient-text text-4xl font-bold mb-4">{demo.title}</h1>
      <p class="text-lg mb-6 text-text-muted">{demo.description}</p>
      <div class="mb-6">
        {demo.tags.map(tag => (
          <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mr-2 mb-2">{tag}</span>
        ))}
      </div>
      <ul class="list-disc pl-6 mb-8 text-base">
        {demo.features?.map(feature => (
          <li>{feature}</li>
        ))}
      </ul>
      <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <a href={demo.url} target="_blank" rel="noopener noreferrer" class="btn">Try Demo</a>
        {demo.githubUrl && (
          <a href={demo.githubUrl} target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Code</a>
        )}
      </div>
      <div class="text-sm text-text-muted">Tech Stack: {demo.techStack?.join(', ')}</div>
      <div class="text-sm text-text-muted mt-2">Status: {demo.status.charAt(0).toUpperCase() + demo.status.slice(1)} &bull; Difficulty: {demo.difficulty.charAt(0).toUpperCase() + demo.difficulty.slice(1)} &bull; Released: {new Date(demo.createdAt).toLocaleDateString()}</div>
    </div>
  </section>
</Layout>`;

// List of demos to update (excluding the ones already updated and the index)
const demosToUpdate = [
    'star-gazer',
    'ignite-karaoke',
    'lissajous-demo',
    'jhand-tv',
    'vinyl-viewer',
    'doggo-explorer',
    'sup-destinations',
    'lifx-app',
    'spr1nklr',
    'devops-certified',
    'camp-tribute',
    'split-sumthin',
    'see-ya-there'
];

// Demo titles for the alt text
const demoTitles = {
    'star-gazer': 'Star Gazer',
    'ignite-karaoke': 'Ignite Karaoke',
    'lissajous-demo': 'Lissajous Demo',
    'jhand-tv': 'JHand TV',
    'vinyl-viewer': 'Vinyl Viewer',
    'doggo-explorer': 'Doggo Explorer',
    'sup-destinations': 'Sup Destinations',
    'lifx-app': 'LIFX App',
    spr1nklr: 'Spr1nklr',
    'devops-certified': 'DevOps Certified',
    'camp-tribute': 'Camp Tribute',
    'split-sumthin': 'Split Sumthin',
    'see-ya-there': 'See Ya There'
};

// Update each demo file
demosToUpdate.forEach((demoId) => {
    const filePath = path.join(__dirname, '..', 'src', 'pages', 'demos', `${demoId}.astro`);
    const demoTitle = demoTitles[demoId];

    if (fs.existsSync(filePath)) {
        const newContent = newTemplate(demoId, demoTitle);
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${demoId}.astro`);
    } else {
        console.log(`File not found: ${demoId}.astro`);
    }
});

console.log('Demo pages update complete!');
