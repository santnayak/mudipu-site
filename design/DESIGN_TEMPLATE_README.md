# Mudipu Design Template

This folder contains the Mudipu design system that can be used as a template for all frontend projects.

## 📁 Files in This Template

1. **DESIGN_SYSTEM.md** - Complete design documentation and guidelines
2. **design-tokens.json** - Exportable design tokens (colors, typography, spacing)
3. **Template files** (copy to your new project):
   - `tailwind.config.template.js` - Tailwind configuration
   - `index.css.template` - Theme CSS variables
   - `Logo.tsx` - Brand logo component
   - `ThemeProvider.tsx` - Theme context provider
   - `ThemeToggle.tsx` - Theme switcher component

---

## 🚀 Quick Start: New Project

### 1. Create New Vite + React + TypeScript Project
```bash
npm create vite@latest my-mudipu-app -- --template react-ts
cd my-mudipu-app
```

### 2. Install Dependencies
```bash
npm install
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Copy Design Files
Copy from this template folder to your new project:
```bash
# Copy Tailwind config
cp tailwind.config.template.js ./tailwind.config.js

# Copy CSS theme
cp index.css.template ./src/index.css

# Copy components
mkdir -p src/components
cp Logo.tsx ./src/components/
cp ThemeProvider.tsx ./src/components/
cp ThemeToggle.tsx ./src/components/
```

### 4. Update Your App
```tsx
// src/App.tsx
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### 5. Add Logo to Navigation
```tsx
import Logo from './components/Logo'
import ThemeToggle from './components/ThemeToggle'

<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Logo size="md" />
    <ThemeToggle />
  </div>
</nav>
```

---

## 🎨 Using Design Tokens

### Import in JavaScript/TypeScript
```typescript
import designTokens from './design-tokens.json'

const primaryColor = designTokens.colors.primary.hex
const fontFamily = designTokens.typography.fontFamily.primary
```

### Reference in CSS
```css
/* Use HSL values from design-tokens.json */
:root {
  --primary: 0 72.2% 50.6%;
}
```

---

## 📦 Component Library

### Logo Component
```tsx
<Logo size="sm" />      // Small (navigation)
<Logo size="md" />      // Medium (default)
<Logo size="lg" />      // Large (footer, hero)
<Logo showText={false} /> // Icon only
```

### Theme Toggle
```tsx
<ThemeToggle />  // Automatic sun/moon icon
```

### Cards
```tsx
<div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
    <Activity className="h-6 w-6 text-primary" />
  </div>
  <h3 className="mb-3 text-xl font-semibold">Title</h3>
  <p className="text-sm text-muted-foreground">Description</p>
</div>
```

---

## 🎯 Design Principles

1. **Consistency** - Use design tokens across all projects
2. **Accessibility** - WCAG AA compliant, proper contrast ratios
3. **Responsiveness** - Mobile-first, works on all devices
4. **Theme Support** - Always support light and dark modes
5. **Performance** - Lightweight, optimized animations
6. **Simplicity** - Clean, minimal, focused UI

---

## 📐 Layout Patterns

### Hero Section
```tsx
<section className="relative overflow-hidden pt-16">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
  <div className="container relative mx-auto px-6 py-24 lg:py-32">
    {/* Content */}
  </div>
</section>
```

### Card Grid (3 columns)
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
        <Link to="/privacy">Privacy</Link>
        <Link to="/imprint">Imprint</Link>
      </div>
    </div>
  </div>
</footer>
```

---

## 🔧 Customization

### Extending Colors
Add new semantic colors in `tailwind.config.js`:
```javascript
colors: {
  // ... existing colors
  success: "hsl(142 71% 45%)",
  warning: "hsl(38 92% 50%)",
}
```

### Custom Components
Follow the naming convention:
- PascalCase for components: `MyComponent.tsx`
- Use Tailwind utility classes
- Support both light/dark themes
- Add hover states

---

## ✅ Checklist for New Projects

- [ ] Install dependencies (React, React Router, Lucide React)
- [ ] Copy Tailwind config
- [ ] Copy theme CSS (index.css)
- [ ] Copy Logo, ThemeProvider, ThemeToggle components
- [ ] Wrap app with ThemeProvider
- [ ] Add navigation with Logo and ThemeToggle
- [ ] Set up responsive container
- [ ] Test light and dark themes
- [ ] Verify on mobile devices
- [ ] Check accessibility (keyboard navigation, screen readers)

---

## 📞 Support

- **Documentation:** See `DESIGN_SYSTEM.md`
- **Tokens:** Reference `design-tokens.json`
- **GitHub:** [github.com/santnayak/mudipu](https://github.com/santnayak/mudipu)
- **Email:** santhoshnayak0903@gmail.com

---

## 📄 License

GPL-3.0 - See LICENSE file

**© 2026 Mudipu**
