# Jhansi Rani - AI Engineer Portfolio

A professional portfolio website for Jhansi Rani, a Computer Science and Engineering graduate specializing in Agentic AI, Generative AI, Python Backend Development, and Full-Stack Development.

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Features

- Responsive design for all screen sizes
- Smooth scroll navigation
- Animated hero section with workflow diagram
- Interactive project case studies with modal views
- Skills categorization
- Education and achievements timeline
- Contact section with email copy functionality
- SEO optimized with meta tags
- Accessible with keyboard navigation and ARIA labels

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Production Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Local Preview

Preview the production build locally:
```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages using one of these methods:

**Option A: Using GitHub CLI**
```bash
gh repo set-default
gh pages deploy dist
```

**Option B: Manual**
- Push the `dist` folder to a `gh-pages` branch
- Enable GitHub Pages in repository settings
- Select the `gh-pages` branch as the source

3. Update the base URL in `vite.config.ts` if deploying to a subdirectory:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### Cloudflare Pages

1. Build the project:
```bash
npm run build
```

2. Deploy using Cloudflare Pages:
- Connect your GitHub repository
- Set build command: `npm run build`
- Set output directory: `dist`
- Deploy

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy using Netlify:
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`
- Deploy

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## Configuration

### Adding Resume PDF

Place your resume PDF at:
```
public/resume/Jhansi_Rani_Resume.pdf
```

The resume button in the navigation and hero section will link to this file. If no resume file is present, the button will show a 404 error. Consider removing or disabling the resume button if you do not have a PDF ready.

### Updating Profile Information

Edit `src/data/profile.ts` to update:
- Name and title
- Contact information
- Social media links
- Education details
- Achievements

### Updating Projects

Edit `src/data/projects.ts` to:
- Add or modify project details
- Update technology stacks
- Change project descriptions
- Add GitHub or demo links

### Updating Skills

Edit `src/data/skills.ts` to:
- Add or remove skill categories
- Update technology lists
- Reorganize skill groupings

### Updating Colors

The color scheme is defined in `src/index.css` using inline color values. To change colors, update the hex values in the component files or create a consistent color system.

## Customization

### Changing the Domain

After deploying to your domain, update the following in `index.html`:
- Update the canonical URL meta tag
- Update Open Graph URLs
- Update sitemap URL in `public/robots.txt`

### Adding Analytics

Add your analytics script (e.g., Google Analytics) to `index.html` in the `<head>` section.

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the cache:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

2. Check TypeScript errors:
```bash
npx tsc --noEmit
```

3. Ensure all dependencies are installed:
```bash
npm install
```

### Tailwind CSS Issues

If Tailwind classes are not working:

1. Ensure `@tailwindcss/postcss` is installed
2. Check `postcss.config.js` has the correct plugin
3. Verify `src/index.css` imports Tailwind correctly

### Deployment Issues

If the site doesn't load after deployment:

1. Check that the build command ran successfully
2. Verify the output directory is correct for your hosting platform
3. Ensure all paths are relative (no absolute paths to local files)
4. Check browser console for errors
5. Verify the base URL configuration if deploying to a subdirectory

### Resume Button Not Working

If the resume button shows a 404:

1. Ensure the PDF file exists at `public/resume/Jhansi_Rani_Resume.pdf`
2. Check the file name matches exactly (case-sensitive)
3. Verify the file is included in the build by checking the `dist` folder
4. If no resume is available, remove or comment out the resume button in the Navbar and Hero components

## Project Structure

```
portfolio/
├── public/
│   ├── resume/
│   │   └── README.md
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── postcss.config.js
```

## License

This portfolio is for personal use. Feel free to use it as a template for your own portfolio.

## Contact

- **Email**: jhansirani5013@gmail.com
- **LinkedIn**: https://linkedin.com/in/jhansi-rani-38196a288
- **GitHub**: https://github.com/jhansirani5013-dev
"# Portfolio" 
