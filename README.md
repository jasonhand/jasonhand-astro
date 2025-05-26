# Jason Hand's Personal Website

A modern personal website built with Astro.js, Tailwind CSS, and deployed on Netlify. This project leverages Netlify's platform features including Edge Functions, Image CDN, and Blob Store for optimal performance.

## 🚀 Tech Stack

- **Framework**: [Astro.js](https://astro.build/) - Fast, content-focused web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: React (for interactive components)
- **Deployment**: [Netlify](https://netlify.com/) - Modern web platform
- **Package Manager**: npm
- **TypeScript**: Full TypeScript support

## 🛠️ Development Commands

All commands are run from the root of the project:

| Command             | Action                                                      |
| :------------------ | :---------------------------------------------------------- |
| `npm install`       | Installs dependencies                                       |
| `npm run dev`       | Starts local dev server at `localhost:4321`                 |
| `netlify dev`       | Starts dev server with Netlify features at `localhost:8888` |
| `npm run build`     | Build your production site to `./dist/`                     |
| `npm run preview`   | Preview your build locally, before deploying                |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check`            |

## 🏗️ Project Structure

```
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── assets/         # Processed assets
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   ├── styles/         # Global CSS and Tailwind config
│   └── utils/          # Utility functions
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization Guide

### Getting Started with Your Personal Website

1. **Update Site Information**

   - Modify `src/layouts/Layout.astro` to update the site title and meta information
   - Replace favicon and other icons in the `public/` directory

2. **Customize the Homepage**

   - Edit `src/pages/index.astro` to create your personal landing page
   - Add your bio, skills, projects, and contact information

3. **Styling Options**

   - The site uses Tailwind CSS for styling
   - Customize colors and themes in `src/styles/globals.css`
   - Modify the Tailwind configuration for your brand colors

4. **Add New Pages**
   - Create new `.astro` files in `src/pages/` for additional pages
   - Common pages: About, Projects, Blog, Contact

### Available Styling Templates & Themes

Since this project uses Tailwind CSS, you have several options for styling:

1. **Built-in Tailwind Components**

   - The current setup includes custom button styles and layout components
   - Modify `src/styles/globals.css` to customize the design system

2. **Tailwind UI Components** (Recommended)

   - [Tailwind UI](https://tailwindui.com/) - Official component library
   - [Headless UI](https://headlessui.com/) - Unstyled, accessible components

3. **Free Tailwind Templates**

   - [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit)
   - [HyperUI](https://hyperui.dev/) - Free Tailwind CSS components
   - [Tailwind Components](https://tailwindcomponents.com/) - Community components

4. **Astro Themes**
   - Browse [Astro Themes](https://astro.build/themes/) for complete theme options
   - Many are free and can be adapted to your needs

### Content Recommendations

Consider adding these sections to your personal website:

- **Hero Section**: Brief introduction and call-to-action
- **About**: Your background, experience, and interests
- **Projects**: Showcase your work with descriptions and links
- **Skills**: Technical skills and expertise areas
- **Blog**: Share thoughts and tutorials (optional)
- **Contact**: Ways to get in touch

## 🚀 Deployment

### Netlify Deployment

This site is optimized for Netlify deployment:

1. **Automatic Deployments**: Push to main branch triggers deployment
2. **Preview Deployments**: Pull requests get preview URLs
3. **Edge Functions**: Server-side functionality at the edge
4. **Image Optimization**: Automatic image processing and CDN

### Local Development with Netlify Features

For full functionality (edge functions, blob store), use Netlify CLI:

```bash
# Install Netlify CLI globally
npm install netlify-cli@latest -g

# Link to your Netlify site (optional)
netlify link

# Start development server with Netlify features
netlify dev
```

## 📝 Next Steps

1. **Personalize Content**: Update the homepage with your information
2. **Choose a Design**: Pick a styling approach from the options above
3. **Add Pages**: Create additional pages for your content
4. **Optimize**: Add proper meta tags, alt text, and SEO optimization
5. **Deploy**: Push to your repository and deploy to Netlify

## 🤝 Contributing

This is a personal website project, but feel free to:

- Report issues or bugs
- Suggest improvements
- Share your own customizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
