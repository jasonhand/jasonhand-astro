# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start Astro development server (http://localhost:4321)
npm run start        # Alias for npm run dev
netlify dev          # Start with Netlify features (recommended for full feature testing)

# Build & Deploy
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands

# Demo Management
npm run add-demo     # Interactive CLI to add new demo apps
```

## Architecture Overview

This is a personal website built with **Astro.js v5.5+** using **Islands Architecture** - static content with selective React hydration only where interactivity is needed. The site leverages **Netlify's platform features** including Edge Functions, Blob Store, and Image CDN.

### Key Architectural Patterns

1. **Hybrid Rendering**: Static pages with API routes for dynamic features
2. **Data-Driven Content**: All demos, publications, and content managed via TypeScript data files
3. **Theme System**: Dynamic CSS custom properties with 4 preset themes (Candycode, Ocean, Sunset, Forest)
4. **Component Strategy**: `.astro` for static components, `.tsx` only for interactive elements

### Core Systems

#### Demo Apps System
- **Central Data**: All demo information in `src/data/demos.ts` with TypeScript interfaces
- **Individual Pages**: Each demo gets its own `.astro` file in `src/pages/demos/`
- **CLI Management**: Use `npm run add-demo` to add new demos (auto-generates pages)
- **Filtering**: Category-based filtering on `/demos` page
- **Integration**: Featured demos appear on homepage

#### Theme System
- **Implementation**: CSS custom properties with React state management
- **Storage**: Persisted in localStorage with system theme detection
- **Themes**: 4 predefined color schemes with smooth transitions
- **Component**: `src/components/ThemeToggle.tsx` manages theme switching

#### API Layer
- **Blob Storage**: Netlify Blob Store for user-generated content (shapes app)
- **Edge Functions**: Custom routing and dynamic content in `netlify/edge-functions/`
- **API Routes**: Astro API routes in `src/pages/api/` for server-side functionality

### File Structure Conventions

```
src/
├── components/          # Reusable components
│   ├── *.astro         # Static components (Header, Footer, Cards)
│   └── *.tsx           # Interactive components (ThemeToggle, SkillsFilter)
├── layouts/
│   └── Layout.astro    # Base layout with SEO, themes, and Datadog RUM
├── pages/              # File-based routing
│   ├── *.astro         # Static pages
│   ├── api/            # Server-side API endpoints
│   └── demos/          # Individual demo pages (auto-generated)
├── data/               # TypeScript data files
│   └── demos.ts        # Demo definitions with helper functions
├── styles/
│   └── globals.css     # Tailwind config + CSS custom properties
└── utils/              # Utility functions
```

## Tech Stack Integration

### Core Stack
- **Astro.js**: Static site generator with islands architecture
- **Tailwind CSS v4**: Utility-first styling with CSS-in-JS via Vite plugin
- **React**: Interactive components only (ThemeToggle, SkillsFilter, ContactForm)
- **TypeScript**: Strict typing enabled across the project
- **Netlify**: Hosting with Edge Functions, Blob Store, and Image CDN

### Key Dependencies
- `@netlify/blobs`: User-generated content storage
- `marked` + `marked-shiki`: Markdown processing with syntax highlighting
- `blobshape`: SVG blob generation
- `@fontsource-variable/inter`: Variable font loading

## Development Patterns

### Adding New Content
1. **Static Pages**: Create `.astro` files in `src/pages/`
2. **Interactive Features**: Use React `.tsx` components sparingly
3. **Demo Apps**: Always use `npm run add-demo` CLI script
4. **Styling**: Prefer Tailwind classes, custom CSS in `globals.css` only

### Component Guidelines
- **Astro Components**: Use for static content and layouts
- **React Components**: Only when client-side interaction is required
- **Props**: Define TypeScript interfaces for all component props
- **Styling**: Mobile-first responsive design with Tailwind

### Content Management
- **Demos**: Managed via `src/data/demos.ts` with auto-generated pages
- **Publications**: Static content in dedicated pages under `src/pages/publications/`
- **Navigation**: Update `src/components/Header.astro` for new top-level pages

## Netlify Platform Features

### Edge Functions
- **Location**: `netlify/edge-functions/`
- **Purpose**: Custom routing and dynamic content delivery
- **Example**: Rewrite rules for legacy URLs

### Blob Store
- **Usage**: User-generated content (blob shapes app)
- **API**: Accessed via `src/pages/api/blob*.ts` endpoints
- **Storage**: Keyed storage for SVG shapes and metadata

### Image CDN
- **Integration**: Astro's Image component with Netlify optimization
- **Location**: All images in `public/images/` directory
- **Optimization**: Automatic format conversion and responsive sizing

## Performance Considerations

- **JavaScript**: Minimal client-side JS via islands architecture
- **Images**: Optimized via Netlify CDN with Astro Image component
- **CSS**: Tailwind purged to production bundle size
- **Fonts**: Variable fonts loaded efficiently with `@fontsource-variable`
- **Monitoring**: Datadog RUM integrated in base layout

## Content Structure

The site showcases multiple content types:
- **Publications**: 6 books/reports including O'Reilly publications
- **Podcasts**: Community Pulse, After Pulse, AI Tools Lab
- **Datadog Work**: Conference talks, live streams, research
- **Demo Apps**: Interactive experiments and proof-of-concepts
- **Art Gallery**: Creative visual work

Each content type has dedicated data structures and page layouts optimized for that content format.