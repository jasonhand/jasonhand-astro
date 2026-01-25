import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the demos file
const demosPath = join(__dirname, '../src/data/demos.ts');
const demosContent = readFileSync(demosPath, 'utf-8');

// Parse demos more carefully - find all demo objects
const demos = [];
const demoBlocks = demosContent.matchAll(/\{\s*id:\s*'([^']+)',[\s\S]*?\}/g);

for (const block of demoBlocks) {
    const demoText = block[0];
    
    const id = demoText.match(/id:\s*'([^']+)'/)?.[1];
    const title = demoText.match(/title:\s*'([^']+)'/)?.[1];
    const description = demoText.match(/description:\s*'([^']+)'/)?.[1];
    const shortDescription = demoText.match(/shortDescription:\s*'([^']+)'/)?.[1];
    const createdAt = demoText.match(/createdAt:\s*'([^']+)'/)?.[1];
    
    // Parse tags array
    const tagsMatch = demoText.match(/tags:\s*\[([^\]]+)\]/);
    const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, '')) : [];
    
    // Parse techStack (optional)
    const techStackMatch = demoText.match(/techStack:\s*\[([^\]]*)\]/);
    const techStack = techStackMatch ? techStackMatch[1].split(',').map(t => t.trim().replace(/['"]/g, '')).filter(t => t) : [];
    
    // Parse features (optional)
    const featuresMatch = demoText.match(/features:\s*\[([^\]]*)\]/);
    const features = featuresMatch ? featuresMatch[1].split(',').map(f => f.trim().replace(/['"]/g, '')).filter(f => f) : [];
    
    const category = demoText.match(/category:\s*'([^']+)'/)?.[1];
    const difficulty = demoText.match(/difficulty:\s*'([^']+)'/)?.[1];
    
    if (id && title && description && shortDescription && createdAt) {
        demos.push({
            id,
            title,
            description,
            shortDescription,
            createdAt,
            tags,
            techStack,
            features,
            category,
            difficulty
        });
    }
}

// Function to generate blog post content
function generateBlogPost(demo) {
    const blogId = `${demo.id}-demo`;
    const blogTitle = `Building ${demo.title}: A Demo Companion`;
    const excerpt = `Exploring the development process, technical decisions, and insights behind ${demo.title} - ${demo.shortDescription.toLowerCase()}.`;
    
    // Generate tags for blog post (combine demo tags with some blog-specific ones)
    const blogTags = [...demo.tags, 'Demo', 'Development', 'Case Study'];
    
    // Generate content
    const content = `# Building ${demo.title}

${demo.description}

## Overview

${demo.title} is a ${demo.category} application that ${demo.shortDescription.toLowerCase()}. This companion post explores the development journey, technical decisions, and lessons learned while building this demo.

## The Problem

[Describe the problem or motivation that led to building this demo]

## Technical Approach

### Technology Stack

${demo.techStack.length > 0 ? `The project leverages:\n\n${demo.techStack.map(tech => `- **${tech}**`).join('\n')}\n` : 'The project uses modern web technologies to deliver a responsive and performant experience.'}

### Key Features

${demo.features.length > 0 ? demo.features.map(feature => `- ${feature}`).join('\n') : 'The application includes several key features designed to provide an engaging user experience.'}

## Development Challenges

[Discuss any specific challenges encountered during development]

## Lessons Learned

[Share insights and takeaways from building this demo]

## Try It Yourself

You can explore ${demo.title} directly at [${demo.id}](/demos/${demo.id}).

## Conclusion

[Wrap up with final thoughts and future considerations]

---

*This post is a companion to the [${demo.title} demo](/demos/${demo.id}). For more demos and projects, visit the [Demos page](/demos).*`;

    // Generate frontmatter
    const frontmatter = `---
id: ${blogId}
title: "${blogTitle}"
excerpt: "${excerpt}"
publishedAt: '${demo.createdAt}'
tags: [${blogTags.map(t => `"${t}"`).join(', ')}]
readTime: 5
featured: false
status: draft
author:
  name: Jason Hand
  avatar: /images/Jhand_AI_Profile.png
---`;

    return `${frontmatter}\n\n${content}`;
}

// Generate blog posts for all demos
const blogDir = join(__dirname, '../src/content/blog');
const generatedPosts = [];

for (const demo of demos) {
    const blogContent = generateBlogPost(demo);
    const filename = `${demo.id}-demo.md`;
    const filepath = join(blogDir, filename);
    
    writeFileSync(filepath, blogContent, 'utf-8');
    generatedPosts.push(filename);
    console.log(`Generated: ${filename}`);
}

console.log(`\n✅ Generated ${generatedPosts.length} blog post drafts`);
console.log(`All posts are marked as 'draft' status and ready for review.`);
