# Abhirami K C - Senior Software Engineer Portfolio

A premium, modern, and fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Premium Design**: Glassmorphism effects, smooth gradients, and elegant animations
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Dark Mode**: Default dark theme optimized for eye comfort
- **Performance Optimized**: Built with Vite for lightning-fast builds
- **SEO Friendly**: Structured metadata and semantic HTML
- **Animated Background**: Particle system with smooth transitions
- **Smooth Interactions**: Section reveal animations and hover effects
- **GitHub Pages Ready**: Easily deploy to GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Extract the project**
   ```bash
   unzip abhirami-portfolio.zip
   cd abhirami-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
abhirami-portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Navigation.tsx     # Top navigation bar
│   │   ├── Hero.tsx           # Hero section with photo placeholder
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Skills.tsx         # Technical skills grid
│   │   ├── Projects.tsx       # Featured projects
│   │   ├── Contact.tsx        # Contact CTA
│   │   ├── Footer.tsx         # Footer with links
│   │   └── AnimatedBackground.tsx
│   ├── hooks/
│   │   └── useInView.ts       # Intersection observer hook
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── package.json
```

## 🎯 Customization

### Add Your Photo

1. Place your photo in `public/` folder (e.g., `public/profile.jpg`)
2. Update the Hero component (`src/components/Hero.tsx`):

```tsx
// Replace this section:
<div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-purple to-primary-blue p-1 glass shadow-2xl">
  <div className="w-full h-full rounded-full bg-slate/40 flex items-center justify-center">
    <span className="text-white/40 text-sm text-center">Photo\nComing Soon</span>
  </div>
</div>

// With this:
<div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-purple to-primary-blue p-1 glass shadow-2xl">
  <img
    src="/profile.jpg"
    alt="Abhirami K C"
    className="w-full h-full rounded-full object-cover"
  />
</div>
```

### Update Colors

Colors are defined in `tailwind.config.js`:
```js
colors: {
  'navy': '#0F172A',
  'slate': '#111827',
  'primary-blue': '#3B82F6',
  'primary-purple': '#8B5CF6',
  'accent-teal': '#14B8A6',
}
```

### Update Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Experience**: Update experiences array in `src/components/Experience.tsx`
- **Skills**: Modify skill categories in `src/components/Skills.tsx`
- **Projects**: Update projects in `src/components/Projects.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`

## 🔧 Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (requires gh-pages)
npm run deploy
```

## 📦 Deployment to GitHub Pages

### Option 1: Using npm script (Recommended)

1. Install gh-pages if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json` homepage:
   ```json
   "homepage": "https://abhiramikc.github.io"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Create a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   ```

3. Copy the contents of `dist/` to root:
   ```bash
   cp -r dist/* .
   ```

4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. Go to repository Settings → Pages → Select `gh-pages` branch

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested on various screen sizes.

## 🎨 Design Highlights

### Glassmorphism
- Semi-transparent glass effect with backdrop blur
- Applied to cards, navigation, and overlays

### Animations
- Smooth scroll behavior
- Section reveal animations on scroll
- Hover effects on interactive elements
- Floating particles in background
- Gradient text animations

### Typography
- Clean, modern typeface (Inter)
- Responsive font sizing with CSS clamp()
- Optimized line heights and spacing

## 🔍 SEO

The portfolio includes:
- Meta tags for description and social sharing
- Semantic HTML structure
- Accessible heading hierarchy
- Fast load times (Vite optimization)
- Mobile-friendly design

## ⚡ Performance

- **Optimized Bundle**: ~150KB gzipped
- **Fast Build Time**: < 1s with Vite
- **Image Optimization**: Lazy loading for images
- **CSS Optimization**: Tailwind purges unused styles

## 📄 License

This portfolio template is free to use and modify for personal use.

## 💡 Tips

1. **Update Email**: Change `kcabhirami@gmail.com` to your email in contact sections
2. **GitHub URL**: Update `https://github.com/abhiramikc` to your GitHub profile
3. **LinkedIn**: Update LinkedIn URL in navigation and contact sections
4. **Phone Number**: Add your phone number in the Contact section if desired
5. **Project Links**: Update or remove project links as needed

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure images are in the `public/` folder
- Use relative paths starting with `/`

## 🚀 Future Enhancements

Possible additions:
- Blog section
- Dark/Light theme toggle
- Contact form with email submission
- Project filters by technology
- Reading time estimates for blog posts
- Social media badges

---

Built with ❤️ using React, Vite, and Tailwind CSS
