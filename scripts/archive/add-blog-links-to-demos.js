import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all demo files
const demosDir = join(__dirname, '../src/pages/demos');
const demoFiles = readdirSync(demosDir).filter(f => f.endsWith('.astro') && f !== 'index.astro');

let updatedCount = 0;

for (const file of demoFiles) {
    const filePath = join(demosDir, file);
    let content = readFileSync(filePath, 'utf-8');
    
    // Check if it already has the blog post import
    const hasBlogImport = content.includes("hasBlogPostForDemo");
    
    // Check if it already has the blog post button
    const hasBlogButton = content.includes("Read Blog Post") || content.includes("Blog Post");
    
    if (hasBlogButton) {
        console.log(`Skipping ${file} - already has blog post link`);
        continue;
    }
    
    // Add import if not present
    if (!hasBlogImport) {
        // Find the import line and add the blog import
        const importMatch = content.match(/import.*from.*demos['"];?\s*\n/);
        if (importMatch) {
            const importLine = importMatch[0];
            const newImport = importLine.replace(
                /from ['"]\.\.\/\.\.\/data\/demos['"];?/,
                "from '../../data/demos';\nimport { hasBlogPostForDemo } from '../../data/blog';"
            );
            content = content.replace(importLine, newImport);
        } else {
            // Try alternative pattern
            const altImportMatch = content.match(/import.*getDemoById.*from/);
            if (altImportMatch) {
                content = content.replace(
                    /(import.*from ['"]\.\.\/\.\.\/data\/demos['"];?)/,
                    "$1\nimport { hasBlogPostForDemo } from '../../data/blog';"
                );
            }
        }
    }
    
    // Extract demo ID from the file
    const demoIdMatch = content.match(/getDemoById\(['"]([^'"]+)['"]\)/);
    if (!demoIdMatch) {
        console.log(`Could not find demo ID in ${file}`);
        continue;
    }
    
    const demoId = demoIdMatch[1];
    
    // Add hasBlogPost check after demo retrieval
    const demoCheckPattern = /(const demo = getDemoById\([^)]+\);?\s*if \(!demo\) \{[\s\S]*?\}\s*)/;
    const demoCheckMatch = content.match(demoCheckPattern);
    
    if (demoCheckMatch) {
        const demoCheckBlock = demoCheckMatch[1];
        if (!demoCheckBlock.includes('hasBlogPost')) {
            content = content.replace(
                demoCheckBlock,
                `${demoCheckBlock}\nconst hasBlogPost = hasBlogPostForDemo(demo.id);\n`
            );
        }
    } else {
        // Try to find where demo is defined
        const demoDefMatch = content.match(/(const demo = getDemoById\([^)]+\);)/);
        if (demoDefMatch) {
            content = content.replace(
                demoDefMatch[1],
                `${demoDefMatch[1]}\nconst hasBlogPost = hasBlogPostForDemo(demo.id);`
            );
        }
    }
    
    // Find button section and add blog post link
    // Look for button sections with "Try Demo" and "View Code"
    const buttonPatterns = [
        // Pattern 1: Hero section with "Back to Demos" button
        /(<div class="flex[^>]*gap-4[^>]*justify-center">[\s\S]*?<a href=\{demo\.url\}[^>]*>Try Demo<\/a>[\s\S]*?\{demo\.githubUrl && \([\s\S]*?View Code[\s\S]*?\)\s*\}[\s\S]*?<a href="\/demos"[^>]*>Back to Demos<\/a>[\s\S]*?<\/div>)/,
        // Pattern 2: Hero section without GitHub
        /(<div class="flex[^>]*gap-4[^>]*justify-center">[\s\S]*?<a href=\{demo\.url\}[^>]*>Try Demo<\/a>[\s\S]*?<a href="\/demos"[^>]*>Back to Demos<\/a>[\s\S]*?<\/div>)/,
        // Pattern 3: Multiple buttons in a flex container with mb-8
        /(<div class="flex[^>]*gap-4[^>]*mb-8">[\s\S]*?<a href=\{demo\.url\}[^>]*>Try Demo<\/a>[\s\S]*?\{demo\.githubUrl && \([\s\S]*?View Code[\s\S]*?\)\s*\}[\s\S]*?<\/div>)/,
        // Pattern 4: Simpler button section
        /(<div class="flex[^>]*gap-4[^>]*mb-8">[\s\S]*?<a href=\{demo\.url\}[^>]*>Try Demo<\/a>[\s\S]*?<\/div>)/,
        // Pattern 5: Button section with different structure
        /(<div class="flex[^>]*gap-4[^>]*">[\s\S]*?<a href=\{demo\.url\}[^>]*>Try Demo<\/a>[\s\S]*?<\/div>)/,
    ];
    
    let updated = false;
    for (const pattern of buttonPatterns) {
        const match = content.match(pattern);
        if (match) {
            const buttonSection = match[1];
            // Check if blog post button already exists
            if (!buttonSection.includes('hasBlogPost') && !buttonSection.includes('Blog Post')) {
                // Add blog post button before closing div
                // Check if it's the hero section (has "Back to Demos" or "Back to Demos")
                const isHeroSection = buttonSection.includes('Back to Demos') || buttonSection.includes('justify-center');
                const buttonClass = isHeroSection ? 'btn btn-lg btn-outline border-accent/50 text-accent hover:bg-accent/10' : 'btn btn-outline border-accent/50 text-accent hover:bg-accent/10';
                
                const newButtonSection = buttonSection.replace(
                    /(\s*<\/div>)$/,
                    `\n                {hasBlogPost && (\n                    <a href={\`/blog/\${demo.id}-demo\`} class="${buttonClass}">\n                        📝 Read Blog Post\n                    </a>\n                )}$1`
                );
                content = content.replace(buttonSection, newButtonSection);
                updated = true;
                break;
            }
        }
    }
    
    if (updated) {
        writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Updated ${file}`);
        updatedCount++;
    } else {
        console.log(`⚠️  Could not find button section in ${file} - may need manual update`);
    }
}

console.log(`\n✅ Updated ${updatedCount} demo pages with blog post links`);
