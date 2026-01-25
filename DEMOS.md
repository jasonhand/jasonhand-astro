# Demo Apps System

This document explains how the demo apps system works and how to add new demos.

## Overview

The demo apps system consists of:

1. **Data-driven demos** - All demo information is stored in `src/data/demos.ts`
2. **Individual demo pages** - Each demo has its own `.astro` file in `src/pages/demos/`
3. **Demo listing page** - `/demos` shows all demos with filtering
4. **Homepage integration** - Featured demos appear on the homepage

## File Structure

```
src/
├── data/
│   └── demos.ts              # Demo data and helper functions
├── pages/
│   ├── demos/
│   │   ├── index.astro       # Demo listing page
│   │   ├── festy-packer.astro # Individual demo pages
│   │   ├── see-ya-there.astro
│   │   └── ...               # One file per demo
│   └── index.astro           # Homepage with demo section
└── components/
    └── DemoCard.astro        # Reusable demo card component
```

## Demo Data Structure

Each demo in `src/data/demos.ts` has the following structure:

```typescript
{
    id: 'unique-demo-id',           // Used for URLs and routing
    title: 'Demo Title',            // Display name
    description: 'Full description...', // Long description
    shortDescription: 'Brief description', // Short description for cards
    icon: '🎒',                     // Emoji icon
    url: 'https://demo-url.com',    // External demo URL
    githubUrl: 'https://github.com/...', // Optional GitHub URL
    tags: ['Tag1', 'Tag2'],         // Searchable tags
    status: 'live' | 'development' | 'preview',
    gradient: 'primary' | 'secondary' | 'accent', // Visual theme
    featured: true,                 // Show on homepage
    createdAt: '2025-01-15',        // ISO date string
    techStack: ['React', 'TypeScript'], // Technologies used
    features: ['Feature 1', 'Feature 2'], // Key features
    category: 'web' | 'ai' | 'visualization' | 'utility' | 'entertainment' | 'education',
    difficulty: 'beginner' | 'intermediate' | 'advanced'
}
```

## Adding a New Demo

### Option 1: Use the CLI Script (Recommended)

```bash
npm run add-demo
```

This will prompt you for all the necessary information and automatically:

- Add the demo to the data file
- Create the individual demo page
- Update any necessary imports

### Option 2: Manual Process

1. **Add demo data** to `src/data/demos.ts`:

   ```typescript
   {
       id: 'my-new-demo',
       title: 'My New Demo',
       // ... other fields
   }
   ```

2. **Create individual demo page** at `src/pages/demos/my-new-demo.astro`:

   ```astro
   ---
   import Layout from '../../layouts/Layout.astro';
   import { getDemoById } from '../../data/demos';

   const demo = getDemoById('my-new-demo');
   if (!demo) {
       return Astro.redirect('/demos');
   }
   ---

   <Layout title={`${demo.title} - Demo - Jason Hand`}>
       <!-- Demo page content -->
   </Layout>
   ```

3. **Run the generation script** to create the page:
   ```bash
   node scripts/generate-demo-pages.js
   ```

## Demo Page Structure

Each individual demo page includes:

- **Hero section** with demo icon, title, and action buttons
- **About section** with full description and key features
- **Tech stack** information
- **Demo details** (category, difficulty, status, creation date)
- **Tags** for categorization

## Button Structure

Each demo card has consistent buttons:

1. **"Try Demo"** - Opens the demo in a new tab
2. **"Details"** - Opens the individual demo page on your site

Individual demo pages have:

1. **"Try Demo"** - Opens the demo in a new tab
2. **"View Code"** - Only shows if GitHub URL exists
3. **"Back to Demos"** - Returns to the demos listing

## Filtering and Categories

The demos listing page (`/demos`) supports filtering by:

- **Category**: web, ai, visualization, utility, entertainment, education
- **Status**: live, development, preview

## Helper Functions

The `src/data/demos.ts` file provides these helper functions:

- `getAllDemos()` - Get all demos sorted by creation date
- `getFeaturedDemos()` - Get only featured demos
- `getDemoById(id)` - Get a specific demo by ID
- `getDemosByCategory(category)` - Filter by category
- `getDemosByStatus(status)` - Filter by status
- `getRecentDemos(limit)` - Get the most recent demos

## Benefits of Individual Pages

- **Better SEO** - Each demo has its own URL and meta tags
- **Custom styling** - Each page can have unique styling if needed
- **Better performance** - No dynamic routing overhead
- **Easier maintenance** - Clear file structure
- **Consistent with site architecture** - Matches other page patterns

## Weekly Demo Addition

To add a new demo weekly:

1. Run `npm run add-demo` to add the demo data
2. The script will automatically create the individual page
3. Commit and push the changes
4. The demo will appear on both the homepage (if featured) and the demos listing page

This system is designed to scale easily as you add more demos over time.
