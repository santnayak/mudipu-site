# 🎨 Mudipu Design System & Template

Complete design system, brand guidelines, and project starter template for all Mudipu frontend projects.

---

## 📁 Files Overview

### Documentation
- **DESIGN_SYSTEM.md** - Complete design guidelines, components, patterns, and usage
- **DESIGN_TEMPLATE_README.md** - Quick start guide for new projects
- **design-reference.html** - Visual reference guide (open in browser)

### Design Tokens
- **design-tokens.json** - Exportable design tokens (colors, typography, spacing, etc.)

### Template Files (Copy to New Projects)
- **tailwind.config.template.js** - Tailwind CSS configuration
- **index.css.template** - Theme CSS with light/dark mode variables
- **package.json.template** - Dependencies for new projects
- **src/components/Logo.tsx** - Mudipu brand logo component
- **src/components/ThemeProvider.tsx** - Theme management context
- **src/components/ThemeToggle.tsx** - Light/dark theme switcher

---

## 🚀 Quick Start

### For Brand Reference
1. Open **design-reference.html** in your browser for visual reference
2. Read **DESIGN_SYSTEM.md** for complete guidelines
3. Reference **design-tokens.json** for exact values

### For New Projects
1. Read **DESIGN_TEMPLATE_README.md** for step-by-step setup
2. Copy template files to your new project
3. Follow the checklist in the README

---

## 🎯 What's Included

### Brand Identity
- ✅ Red dot logo with glow effect
- ✅ "mudipu" wordmark styling
- ✅ Complete color palette (light & dark)
- ✅ JetBrains Mono typography

### Theme System
- ✅ Light mode (soft, refined grays)
- ✅ Dark mode (deep navy, high contrast)
- ✅ Seamless theme switching
- ✅ LocalStorage persistence

### Components
- ✅ Navigation bar
- ✅ Cards with hover effects
- ✅ Buttons (primary, secondary)
- ✅ Badges (status indicators)
- ✅ Footer layout
- ✅ Theme toggle

### Design Tokens
- ✅ Colors (HSL & HEX)
- ✅ Typography scale
- ✅ Spacing system
- ✅ Border radius
- ✅ Shadows & effects
- ✅ Animations

---

## 🎨 Core Brand Colors

### Primary
- **Red:** `#EF4444` / `HSL: 0 72.2% 50.6%`

### Light Theme
- Background: `#FAFAFA` (soft off-white)
- Foreground: `#252830` (charcoal)
- Card: `#FFFFFF` (pure white)
- Muted: `#F4F5F6` (light gray)
- Border: `#E5E7EB` (soft gray)

### Dark Theme
- Background: `#0B0F19` (deep navy)
- Foreground: `#F9FAFB` (off-white)
- Muted: `#1E293B` (dark slate)
- Border: `#1E293B` (dark slate)

---

## 📦 Tech Stack

- **React** 18.3+
- **TypeScript** 5.3+
- **Vite** 5.4+
- **Tailwind CSS** 3.4+
- **Lucide React** (icons)
- **React Router** 6.22+

---

## 🛠️ Usage Examples

### Logo
```tsx
import Logo from './components/Logo'

<Logo size="md" />           // Medium (default)
<Logo size="sm" />           // Small (navigation)
<Logo size="lg" />           // Large (hero)
<Logo showText={false} />    // Icon only
```

### Theme Toggle
```tsx
import ThemeToggle from './components/ThemeToggle'

<ThemeToggle />  // Automatic sun/moon icons
```

### Card Component
```tsx
<div className="group rounded-xl border border-border bg-card p-8 
                transition hover:border-primary/50 
                hover:shadow-lg hover:shadow-primary/10">
  <div className="mb-4 flex h-12 w-12 items-center justify-center 
                  rounded-lg bg-primary/10">
    <Activity className="h-6 w-6 text-primary" />
  </div>
  <h3 className="mb-3 text-xl font-semibold">Title</h3>
  <p className="text-sm text-muted-foreground">Description</p>
</div>
```

---

## 📐 Design Principles

1. **Consistency** - Use design tokens across all projects
2. **Accessibility** - WCAG AA compliant
3. **Responsiveness** - Mobile-first approach
4. **Themeable** - Support both light and dark modes
5. **Performance** - Optimized animations and assets
6. **Simplicity** - Clean, minimal, focused UI

---

## 📞 Support & Contribution

- **GitHub:** [github.com/santnayak/mudipu](https://github.com/santnayak/mudipu)
- **Email:** santhoshnayak0903@gmail.com
- **Documentation:** See DESIGN_SYSTEM.md

---

## 📄 License

GPL-3.0 - See LICENSE file

**© 2026 Mudipu**

---

## 🗂️ Project Structure

```
mudipu-site/
├── DESIGN_SYSTEM.md              # Complete design guidelines
├── DESIGN_TEMPLATE_README.md     # Quick start for new projects
├── design-tokens.json            # Exportable design tokens
├── design-reference.html         # Visual reference guide
├── tailwind.config.template.js   # Tailwind config template
├── index.css.template            # Theme CSS template
├── package.json.template         # Dependencies template
└── src/
    └── components/
        ├── Logo.tsx              # Brand logo component
        ├── ThemeProvider.tsx     # Theme context
        └── ThemeToggle.tsx       # Theme switcher
```

---

**Use this design system to ensure consistency across:**
- Platform (app.mudipu.dev)
- Hub (hub.mudipu.dev)
- Landing Site (mudipu.dev)
- SDK Documentation
- Any new Mudipu frontend projects
