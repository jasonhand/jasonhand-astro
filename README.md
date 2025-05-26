# Jason Hand - Personal Website

A modern, interactive personal website built with Astro.js, showcasing work in developer relations, publications, podcasts, and innovative demo applications.

## 🚀 Live Site

Visit the live site at: [Your Domain Here]

## ✨ Features

### Interactive Components

- **Theme Toggle**: 4 beautiful color themes (Candycode, Ocean, Sunset, Forest)
- **Skills Filter**: Interactive filtering and search for technical skills
- **Mobile-Optimized Navigation**: Responsive design with mobile-first approach
- **Smooth Animations**: Scattered letter animations and hover effects

### Content Sections

- **Publications**: 6 books and reports including O'Reilly publications
- **Podcasts**: Community Pulse, After Pulse, and AI Tools Lab episodes
- **Datadog Work**: Conference talks, live streams, and AI research
- **Demo Apps**: Interactive experiments and proof-of-concepts
- **Videos**: YouTube channel integration
- **Art Gallery**: Creative visual work

### Technical Features

- **Static Site Generation**: Fast loading with Astro.js
- **Islands Architecture**: Interactive components only where needed
- **Responsive Design**: Mobile-first with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and performance
- **PWA Ready**: Service worker and manifest support

## 🛠 Tech Stack

- **Framework**: [Astro.js](https://astro.build/) v5.5+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.0+
- **Interactive Components**: [React](https://reactjs.org/) (Islands)
- **Deployment**: [Netlify](https://netlify.com/)
- **Package Manager**: npm
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── SkillsFilter.tsx    # Interactive skills filtering
│   ├── ThemeToggle.tsx     # Theme switching component
│   ├── Header.astro        # Site navigation
│   └── Footer.astro        # Site footer
├── layouts/             # Page layouts
│   └── Layout.astro        # Base layout with SEO
├── pages/               # Route pages
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   ├── publications.astro  # Books and publications
│   ├── podcasts.astro      # Podcast episodes
│   ├── videos.astro        # YouTube content
│   ├── demo-apps.astro     # Interactive demos
│   ├── art.astro           # Art gallery
│   ├── projects.astro      # Datadog work overview
│   ├── datadog/            # Datadog-specific pages
│   └── publications/       # Individual book pages
├── styles/              # Global styles
│   └── globals.css         # Tailwind and custom CSS
└── assets/              # Static assets
public/
├── images/              # Image assets
├── favicon.ico          # Site favicon
└── site.webmanifest     # PWA manifest
```

## 🎨 Design System

### Color Themes

- **Candycode**: Pink and purple gradients
- **Ocean**: Blue and teal tones
- **Sunset**: Orange and red hues
- **Forest**: Green and earth tones

### Typography

- **Headings**: Scattered letter animations
- **Body**: Clean, readable sans-serif
- **Code**: Monospace for technical content

### Components

- **Project Cards**: Hover effects and gradients
- **Buttons**: Multiple variants with smooth transitions
- **Navigation**: Mobile-responsive with theme integration

## 📚 Content

### Publications

- **97 Things Every SRE Should Know** (Contributor - Chapter 38)
- **DevOps For Dummies** (Technical Editor)
- **ChatOps** (Author - O'Reilly Report)
- **Post-Incident Reviews** (Author - O'Reilly Report)
- **Chat in Operations** (Author)
- **The VictorOps Journey to SRE** (Author)

### Podcasts

- **The Community Pulse**: Developer relations and community building
- **After Pulse**: Extended discussions and follow-ups
- **AI Tools Lab**: Experimental AI conversations

### Datadog Work

- **AI Tools Lab**: Experimental AI research and tools
- **Conference Talks**: Speaking at major tech conferences
- **Live Streams**: Educational content and community engagement
- **DASH Conference**: Annual user conference contributions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd jasonhand-astro
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
netlify dev          # Start with Netlify features
```

## 🌐 Deployment

The site is deployed on Netlify with automatic deployments from the main branch.

### Netlify Features Used

- **Edge Functions**: Dynamic content processing
- **Image CDN**: Optimized image delivery
- **Form Handling**: Contact form processing
- **Branch Previews**: Preview deployments for PRs

### Environment Variables

```bash
# Add any required environment variables
NETLIFY_SITE_ID=your-site-id
```

## 🔧 Customization

### Adding New Themes

1. Update `src/components/ThemeToggle.tsx`
2. Add CSS custom properties in `src/styles/globals.css`
3. Test across all components

### Adding New Content

1. Create new pages in `src/pages/`
2. Update navigation in `src/components/Header.astro`
3. Add appropriate images to `public/images/`

### Modifying Skills

1. Update the skills data in `src/components/SkillsFilter.tsx`
2. Organize by categories (technical, soft, leadership)

## 📱 Mobile Experience

- **Responsive Design**: Mobile-first approach
- **Touch Interactions**: Optimized for touch devices
- **Performance**: Fast loading on mobile networks
- **Navigation**: Collapsible mobile menu

## 🔍 SEO & Performance

- **Meta Tags**: Comprehensive SEO meta tags
- **Structured Data**: JSON-LD for rich snippets
- **Performance**: Optimized images and minimal JavaScript
- **Accessibility**: ARIA labels and semantic HTML
- **Core Web Vitals**: Optimized for Google's metrics

## 🤝 Contributing

This is a personal website, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Your Domain]
- **Email**: [Your Email]
- **LinkedIn**: [linkedin.com/in/jasonhand24](https://linkedin.com/in/jasonhand24)
- **GitHub**: [github.com/jasonhand](https://github.com/jasonhand)
- **YouTube**: [youtube.com/@jhand](https://youtube.com/@jhand)

## 🙏 Acknowledgments

- **Astro.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Netlify**: For hosting and deployment
- **O'Reilly Media**: For publishing opportunities
- **Community Pulse**: For podcast collaboration
- **Datadog**: For supporting developer relations work

---

Built with ❤️ using Astro.js and deployed on Netlify.
