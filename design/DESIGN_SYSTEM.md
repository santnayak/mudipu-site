# Mudipu Design System

**Version:** 1.0  
**Last Updated:** April 21, 2026  
**License:** GPL-3.0

---

## Overview

This document defines the visual identity and design principles for all Mudipu frontend projects (Platform, Hub, SDK docs, Landing pages).

---

## Brand Identity

### Logo
- **Symbol:** Red dot (circle)
- **Color:** `#EF4444` (red-500)
- **Effect:** Subtle red glow `shadow-[0_0_10px_rgba(239,68,68,0.5)]`
- **Wordmark:** "mudipu" in lowercase
- **Font:** JetBrains Mono

### Sizes
- **Small:** dot: `h-1.5 w-1.5`, text: `text-base`
- **Medium:** dot: `h-2 w-2`, text: `text-xl`
- **Large:** dot: `h-3 w-3`, text: `text-3xl`

---

## Color Palette

### Primary Colors
```css
/* Brand Red */
--primary: 0 72.2% 50.6%;           /* #EF4444 */
--primary-foreground: 0 0% 100%;    /* White */
```

### Light Theme
```css
--background: 0 0% 98%;              /* #FAFAFA - Soft off-white */
--foreground: 220 13% 18%;           /* #252830 - Charcoal */
--card: 0 0% 100%;                   /* #FFFFFF - Pure white */
--card-foreground: 220 13% 18%;      /* #252830 */
--muted: 220 14% 96%;                /* #F4F5F6 - Light gray */
--muted-foreground: 220 9% 46%;      /* #6C727F - Medium gray */
--border: 220 13% 91%;               /* #E5E7EB */
```

### Dark Theme
```css
--background: 222.2 84% 4.9%;        /* #0B0F19 - Deep navy */
--foreground: 210 40% 98%;           /* #F9FAFB - Off-white */
--card: 222.2 84% 4.9%;              /* #0B0F19 */
--card-foreground: 210 40% 98%;      /* #F9FAFB */
--muted: 217.2 32.6% 17.5%;          /* #1E293B - Dark slate */
--muted-foreground: 215 20.2% 65.1%; /* #94A3B8 - Light slate */
--border: 217.2 32.6% 17.5%;         /* #1E293B */
```

### Semantic Colors
```css
--destructive: 0 84.2% 60.2%;        /* Red for errors */
--success: 142 71% 45%;              /* Green (if needed) */
--warning: 38 92% 50%;               /* Amber (if needed) */
```

---

## Typography

### Font Family
```css
font-family: 'JetBrains Mono', monospace;
```

### Font Weights
- Light: `300`
- Regular: `400`
- Medium: `500`
- Semibold: `600`
- Bold: `700`
- Extrabold: `800`

### Font Sizes (Tailwind Scale)
- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-7xl`: 4.5rem (72px)

### Headings
```css
h1: text-5xl lg:text-7xl, font-bold
h2: text-4xl, font-bold
h3: text-2xl xl:text-xl, font-semibold
```

---

## Spacing

### Container
```css
max-width: 1200px
padding: 0 1.5rem (px-6)
```

### Common Gaps
- Cards grid: `gap-6` (1.5rem)
- Sections: `py-24` (6rem vertical)
- Card padding: `p-8` (2rem)

---

## Components

### Navigation Bar
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Logo size="md" />
    <ThemeToggle />
  </div>
</nav>
```

### Card
```tsx
<div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
  {/* Icon */}
  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
    <Icon className="h-6 w-6 text-primary" />
  </div>
  {/* Title */}
  <h3 className="mb-3 text-xl font-semibold">Title</h3>
  {/* Description */}
  <p className="text-sm text-muted-foreground">Description text</p>
</div>
```

### Button (Primary)
```tsx
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90">
  Button Text
</button>
```

### Button (Secondary)
```tsx
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-lg font-semibold transition hover:bg-muted">
  Button Text
</button>
```

### Badge
```tsx
{/* Coming Soon */}
<span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
  Coming Soon
</span>

{/* Available */}
<span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-500">
  v1.0 Available
</span>
```

---

## Icons

### Library
**Lucide React** - Consistent, minimal icon set

### Common Icons
```tsx
import { 
  Activity,    // Platform/Monitoring
  Globe,       // Hub/Network
  Code,        // SDK/Development
  Github,      // GitHub links
  Moon,        // Dark theme
  Sun,         // Light theme
  ArrowLeft,   // Navigation back
  Terminal,    // CLI/Console
  Zap,         // Quick actions
  Heart,       // Health metrics
  Shield,      // Security/Privacy
  Search       // Discovery
} from 'lucide-react'
```

### Icon Sizing
- Small: `h-4 w-4`
- Medium: `h-5 w-5`
- Large: `h-6 w-6`
- XL: `h-8 w-8`

---

## Effects & Animations

### Hover Effects
```css
/* Card hover */
hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10

/* Button hover */
hover:opacity-90
hover:bg-muted

/* Link hover */
hover:text-primary
hover:underline
```

### Animations
```css
/* Fade in */
.animate-fadeIn {
  animation: fadeIn 0.8s ease-in;
}

/* Float effect (for logo) */
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Backdrop Blur
```css
/* Navigation */
bg-background/80 backdrop-blur-sm
```

---

## Layout Patterns

### Hero Section
```tsx
<section className="relative overflow-hidden pt-16">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
  <div className="container relative mx-auto px-6 py-24 lg:py-32">
    <div className="mx-auto max-w-4xl text-center animate-fadeIn">
      {/* Logo, Title, CTA */}
    </div>
  </div>
</section>
```

### Card Grid
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

### Footer
```tsx
<footer className="border-t border-border py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <Logo size="md" />
      <div className="flex gap-6 text-sm text-muted-foreground">
        {/* Links */}
      </div>
    </div>
  </div>
</footer>
```

---

## Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

---

## Accessibility

### Color Contrast
- Light theme: WCAG AA compliant
- Dark theme: WCAG AA compliant
- Interactive elements: Clear focus states

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h6)
- Use `<nav>`, `<main>`, `<footer>`, `<section>`
- Add `aria-label` for icon-only buttons

---

## Code Standards

### Naming Conventions
- Components: PascalCase (`ThemeToggle.tsx`)
- Utilities: camelCase
- CSS classes: kebab-case (Tailwind)

### File Structure
```
src/
├── components/          # Reusable UI components
│   ├── Logo.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeProvider.tsx
├── pages/              # Page components
├── index.css           # Global styles & theme
└── App.tsx             # Root component
```

---

## Usage Guidelines

### DO
✅ Use the red dot logo consistently  
✅ Maintain typography hierarchy  
✅ Use Lucide icons for consistency  
✅ Follow spacing scale (Tailwind)  
✅ Support both light and dark themes  
✅ Use JetBrains Mono for all text  

### DON'T
❌ Don't use different primary colors  
❌ Don't mix icon libraries  
❌ Don't use custom fonts  
❌ Don't create inconsistent spacing  
❌ Don't skip theme support  

---

## Quick Start Template

### Install Dependencies
```bash
npm install react react-dom react-router-dom lucide-react
npm install -D @vitejs/plugin-react tailwindcss postcss autoprefixer
```

### Copy Files
1. `tailwind.config.js` - Tailwind configuration
2. `src/index.css` - Theme variables & global styles
3. `src/components/Logo.tsx` - Brand logo component
4. `src/components/ThemeProvider.tsx` - Theme context
5. `src/components/ThemeToggle.tsx` - Theme switcher

### Wrap App
```tsx
import { ThemeProvider } from './components/ThemeProvider'

<ThemeProvider defaultTheme="dark">
  <App />
</ThemeProvider>
```

---

## Support & Contribution

For questions or contributions to the design system:
- GitHub: [github.com/santnayak/mudipu](https://github.com/santnayak/mudipu)
- Email: santhoshnayak0903@gmail.com

---

**License:** GPL-3.0  
**© 2026 Mudipu**
