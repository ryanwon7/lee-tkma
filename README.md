# Lee TKMA Website

An open-source starter template for building high-performance, content-driven church websites with Astro. Pure SSG, SEO-ready, built with Tailwind CSS, Markdown content, ready to integrate with any CMS

## Demo and Screenshot
![Home Page](https://imgs.maucariapa.com/uploads/452546054-84337aa6-eea8-4879-9461-d2e7d3665aee.png)

Demo URL: [https://maucariapacom-church-starter.pages.dev](https://maucariapacom-church-starter.pages.dev/)

## Features

- **Pure Static Site Generation (SSG)**: Fast, SEO-friendly pages generated at build time
- **Content-Driven Architecture**: Content managed via Markdown files using Astro Content Collections
- **Mobile-First Responsive Design**: Tailwind CSS for beautiful, responsive layouts
- **SEO Optimized**: Complete meta tags, JSON-LD Schema, and sitemap.xml
- **CMS-Ready Structure**: Easily integrate with headless CMS solutions
- **Comprehensive Church Website Sections**: All essential pages for a complete church website
- **Accessibility Focus**: WCAG compliant design and markup
- **Modern UI Components**: Reusable components with hover states and micro-interactions
- **Integrated Church Icon**: Custom SVG church icon used throughout the site
- **Image Optimization**: Proper image organization and fallback handling

## Project Structure

```
maucariapacom-church-starter/
├── public/
│   ├── uploads/          # Images directories
│   │   ├── classes/       # classes
│   │   ├── programs/      # programs
│   ├── favicon.png
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/           # Astro-processed assets
│   ├── components/       # Reusable Astro components
│   │   ├── Global/       # Header, Footer, Navigation
│   │   ├── Sections/     # Page sections (Hero, Events, etc.)
│   │   └── UI/           # UI components (Button, Card, SEO)
│   ├── content/          # Astro Content Collections
│   │   ├── config.ts     # Collection schemas
│   │   ├── classes/       # classes
│   │   ├── programs/      # programs
│   │   └── siteInfo/     # Site configuration content
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages
│   └── utils/            # Utility functions
├── astro.config.mjs
├── tailwind.config.cjs
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MauCariApa-com/maucariapacom-church-starter.git
   cd maucariapacom-church-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Customization

### Site Information

Update your information in the following files:

- Site metadata in `astro.config.mjs`
- SEO defaults in `src/layouts/BaseLayout.astro`

### Styling

This template uses Tailwind CSS for styling:

1. Customize colors and other theme settings in `tailwind.config.cjs`
2. Global styles are in `src/assets/styles/global.css`
3. The template includes a comprehensive color system with primary, secondary, and accent colors


### Images

Images are organized in the `/public/uploads/` directory:
- `/uploads/staff/` - Staff profile images
- `/uploads/events/` - Event images
- `/uploads/sermons/` - Sermon thumbnails
- `/uploads/ministries/` - Ministry logos
- `/uploads/blog/` - Blog post images

The template includes fallback handling for missing images and uses external Unsplash images for some sections.

## Headless CMS Integration

This starter is designed to work well with these headless CMS solutions:

### TinaCMS

1. Install TinaCMS:
   ```bash
   npm install tinacms @tinacms/cli
   ```

2. Add the Tina config file (see TinaCMS documentation)

3. The existing Content Collections schemas can be adapted for TinaCMS

### Decap CMS (formerly Netlify CMS)

1. Add Decap CMS config to `public/admin/config.yml`
2. The existing Content Collections structure works well with Decap CMS

## Deployment

This site can be deployed to any static hosting platform:

### Netlify

1. Push your repository to GitHub
2. Connect to Netlify
3. Set build command to `npm run build` and publish directory to `dist/`

### Vercel

1. Push your repository to GitHub
2. Import in Vercel
3. It will automatically detect Astro and set up the correct build settings

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Run `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.