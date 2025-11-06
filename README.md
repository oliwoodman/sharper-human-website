# Sharper Human - Official Website

Premium nootropic supplement for founders and entrepreneurs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design Philosophy

- **Ultra-minimal**: Maximum whitespace, clean lines, geometric precision
- **Premium aesthetic**: BMW/Mercedes/Aesop level luxury
- **Typography**: Ultra-thin weights (100-200), generous letter-spacing
- **Color palette**: Pure black (#000), off-white (#f5f5f5), copper accents (#d4a574)
- **Performance-first**: Optimized images, smooth animations, fast load times

## Project Structure

```
sharper-human-site/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles and animations
├── components/
│   └── Hero.tsx         # Hero section component
├── public/
│   ├── images/          # Product images
│   └── logo-*.svg       # Logo variations
└── ...config files
```

## Brand Assets

### Logo Variations
- `logo-white-stacked.svg` - For dark backgrounds (primary)
- `logo-black-stacked.svg` - For light backgrounds
- `logo-white-horizontal.svg` - Horizontal white
- `logo-black-horizontal.svg` - Horizontal black

### Typography
- Font stack: System fonts (-apple-system, Helvetica Neue, Arial)
- Weights: 100-200 for headlines, 300 for body, never above 400

### Animations
- `floatIn`: Product image entrance (1.8s)
- `fadeInUp`: Text elements with staggered delays (1s)
- `scrollPulse`: Scroll indicator (2s infinite)

## Performance Goals

- Lighthouse score > 90
- Load time < 2 seconds
- Optimized images (WebP format)
- Smooth 60fps animations

## Deployment

Build for production:
```bash
npm run build
npm start
```

## License

Proprietary - Sharper Human © 2025
