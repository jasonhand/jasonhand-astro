import type { BlogPost } from '../types';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load all markdown files from the content/blog directory
function loadMarkdownFiles(): Map<string, string> {
    // Find the project root by looking for package.json
    let currentDir = __dirname;
    let projectRoot = currentDir;

    // Walk up the directory tree to find project root
    while (currentDir !== dirname(currentDir)) {
        try {
            const packageJsonPath = join(currentDir, 'package.json');
            readFileSync(packageJsonPath, 'utf-8');
            projectRoot = currentDir;
            break;
        } catch {
            currentDir = dirname(currentDir);
        }
    }

    const blogDir = join(projectRoot, 'src/content/blog');
    const contentMap = new Map<string, string>();

    try {
        const files = readdirSync(blogDir).filter((f: string) =>
            f.endsWith('.md') && f.toLowerCase() !== 'readme.md'
        );

        for (const file of files) {
            const filePath = join(blogDir, file);
            const content = readFileSync(filePath, 'utf-8');
            const id = file.replace('.md', '');
            contentMap.set(id, content);
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }

    return contentMap;
}

/**
 * Parse frontmatter from a markdown file
 */
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
    // Normalize line endings to \n
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        throw new Error('Markdown file must have frontmatter delimited by ---');
    }

    const frontmatterText = match[1];
    const body = match[2];

    // Parse YAML-like frontmatter (simple parser for basic key-value pairs)
    const frontmatter: Record<string, any> = {};
    const lines = frontmatterText.split('\n');
    let currentKey: string | null = null;
    let inArray = false;
    let arrayKey: string | null = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip empty lines
        if (!trimmed) {
            continue;
        }

        // Check if it's an array item (must be checked BEFORE nested object check)
        // Array items can be indented (YAML list format) or at root level
        if (trimmed.startsWith('- ')) {
            if (arrayKey) {
                if (!Array.isArray(frontmatter[arrayKey])) {
                    frontmatter[arrayKey] = [];
                }
                const value = trimmed.slice(2).trim();
                // Remove quotes if present
                frontmatter[arrayKey].push(value.replace(/^["']|["']$/g, ''));
            }
            continue;
        }

        // Check if it's a nested object property (indented with 2+ spaces, but NOT an array item)
        const indentMatch = line.match(/^(\s+)(\w+):\s*(.*)$/);
        if (indentMatch && indentMatch[1].length >= 2 && currentKey && !trimmed.startsWith('- ')) {
            const nestedKey = indentMatch[2];
            const nestedValue = indentMatch[3].trim();
            
            if (!frontmatter[currentKey] || typeof frontmatter[currentKey] !== 'object' || Array.isArray(frontmatter[currentKey])) {
                frontmatter[currentKey] = {};
            }
            
            if (nestedValue) {
                frontmatter[currentKey][nestedKey] = parseValue(nestedValue);
            } else {
                // Empty value means nested object
                if (!frontmatter[currentKey][nestedKey]) {
                    frontmatter[currentKey][nestedKey] = {};
                }
            }
            continue;
        }

        // Regular key-value pair (not indented)
        const keyValueMatch = line.match(/^(\w+):\s*(.*)$/);
        if (keyValueMatch) {
            const key = keyValueMatch[1];
            const value = keyValueMatch[2].trim();
            
            // Reset array state when we encounter a new top-level key
            if (inArray) {
                inArray = false;
                arrayKey = null;
            }
            
            // Check if it's an array declaration
            if (value === '[]') {
                inArray = true;
                arrayKey = key;
                currentKey = key;
                frontmatter[key] = [];
            } else if (value === '') {
                // Empty value could be a nested object (like author:) or a YAML list
                // Check the next non-empty line to determine which
                let nextNonEmptyLine = '';
                for (let j = i + 1; j < lines.length; j++) {
                    const nextLineTrimmed = lines[j].trim();
                    if (nextLineTrimmed) {
                        nextNonEmptyLine = nextLineTrimmed;
                        break;
                    }
                }
                
                if (nextNonEmptyLine.startsWith('- ')) {
                    // It's a YAML list format
                    inArray = true;
                    arrayKey = key;
                    currentKey = null;
                    frontmatter[key] = [];
                } else {
                    // It's a nested object (like author:)
                    inArray = false;
                    arrayKey = null;
                    currentKey = key;
                    frontmatter[key] = {};
                }
            } else {
                // Check if it's an array format like [item1, item2, item3]
                const arrayMatch = value.match(/^\[(.*)\]$/);
                if (arrayMatch) {
                    // Parse array format: [Technology, AI, Innovation]
                    const arrayContent = arrayMatch[1].trim();
                    if (arrayContent === '') {
                        frontmatter[key] = [];
                    } else {
                        // Split by comma and clean up each item
                        frontmatter[key] = arrayContent
                            .split(',')
                            .map(item => item.trim().replace(/^["']|["']$/g, ''))
                            .filter(item => item.length > 0);
                    }
                    currentKey = null;
                } else {
                    // Simple key-value pair - save immediately
                    inArray = false;
                    arrayKey = null;
                    currentKey = null; // Reset since we've saved it
                    frontmatter[key] = parseValue(value);
                }
            }
        }
    }

    return { frontmatter, body };
}

/**
 * Parse a value, handling strings, numbers, booleans, and quoted strings
 */
function parseValue(value: string): any {
    // Remove surrounding quotes
    const unquoted = value.replace(/^["']|["']$/g, '');
    
    // Check for boolean
    if (unquoted === 'true') return true;
    if (unquoted === 'false') return false;
    
    // Check for number
    if (/^-?\d+$/.test(unquoted)) return parseInt(unquoted, 10);
    if (/^-?\d*\.\d+$/.test(unquoted)) return parseFloat(unquoted);
    
    // Return as string
    return unquoted;
}

/**
 * Load and parse all blog posts from markdown files
 */
function loadBlogPosts(): BlogPost[] {
    const posts: BlogPost[] = [];
    const contentMap = loadMarkdownFiles();

    for (const [id, content] of contentMap.entries()) {
        // Skip files without frontmatter (like README.md)
        let frontmatter: Record<string, any>;
        let body: string;
        
        try {
            const parsed = parseFrontmatter(content);
            frontmatter = parsed.frontmatter;
            body = parsed.body;
            
        } catch (error) {
            console.warn(`Skipping file ${id}.md: ${error instanceof Error ? error.message : 'Invalid frontmatter'}`);
            continue;
        }

        const post: BlogPost = {
            id: frontmatter.id || id,
            title: frontmatter.title || 'Untitled',
            excerpt: frontmatter.excerpt || '',
            content: body.trim(),
            publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
            updatedAt: frontmatter.updatedAt,
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
            readTime: frontmatter.readTime || estimateReadTime(body),
            featured: frontmatter.featured === true,
            status: frontmatter.status === 'draft' ? 'draft' : 'published',
            author: frontmatter.author || {
                name: 'Jason Hand',
                avatar: '/images/Jhand_AI_Profile.png'
            }
        };

        posts.push(post);
    }

    return posts;
}

// Load all blog posts
const blogPosts: BlogPost[] = loadBlogPosts();

// Helper functions
export function getAllBlogPosts(): BlogPost[] {
    return blogPosts
        .filter(post => post.status === 'published')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Get all blog posts including drafts (for static path generation)
 */
export function getAllBlogPostsIncludingDrafts(): BlogPost[] {
    return blogPosts;
}

export function getFeaturedBlogPosts(): BlogPost[] {
    return getAllBlogPosts().filter(post => post.featured);
}

export function getBlogPostById(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id && post.status === 'published');
}

/**
 * Get a blog post by ID including drafts (for "coming soon" pages)
 */
export function getBlogPostByIdIncludingDrafts(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
    return getAllBlogPosts().filter(post =>
        post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
    return getAllBlogPosts().slice(0, limit);
}

export function estimateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get the blog post ID for a demo (if a companion blog post exists)
 * Blog posts for demos follow the pattern: {demo-id}-demo
 */
export function getBlogPostIdForDemo(demoId: string): string | null {
    const blogPostId = `${demoId}-demo`;
    const post = blogPosts.find(p => p.id === blogPostId);
    // Check both published and draft posts since we want to show the link even if it's a draft
    return post ? blogPostId : null;
}

/**
 * Check if a blog post exists for a demo (including drafts)
 */
export function hasBlogPostForDemo(demoId: string): boolean {
    return getBlogPostIdForDemo(demoId) !== null;
}