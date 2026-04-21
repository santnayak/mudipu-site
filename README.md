# Mudipu Landing Page

Modern landing page for Mudipu - built with React, Vite, and Tailwind CSS.

## 🎨 Theme

Uses the **exact same theme** as `mudipu-web`:
- **Primary Color**: Red (#dc2626)
- **Font**: JetBrains Mono (all weights)
- **Dark Theme**: Near-black background (#09090b)
- **Design System**: Matching CSS variables and Tailwind config
- **Logo**: Red dot + "mudipu" text (consistent across all pages)

## 🚀 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev  # Opens at localhost:3001

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Structure

```
src/
├── components/
│   └── Logo.tsx           # Reusable logo (red dot + text)
├── pages/
│   ├── HomePage.tsx       # Main landing page
│   ├── ImprintPage.tsx    # Legal imprint
│   └── PrivacyPage.tsx    # Privacy policy
├── App.tsx                # Root component with routing
├── main.tsx               # Entry point
└── index.css              # Global styles (shared theme)
```

## 🎯 Pages

### Home Page (`/`)
1. **Hero** - Animated logo, headline, CTAs, stats
2. **Features Grid** - 6 key features with icons
3. **How It Works** - 3-step integration guide
4. **CTA Section** - GitHub + Get Started buttons
5. **Footer** - Links to Platform, Hub, Docs, Imprint, Privacy

### Imprint (`/imprint`)
- Legal information (§ 5 TMG)
- Contact details
- Disclaimer
- Open-source notice

### Privacy Policy (`/privacy`)
- Data collection policy (we don't collect any)
- Self-hosted platform info
- GitHub integration notes
- Contact information

## 🌐 Deployment

Deploy to Cloudflare Pages alongside mudipu-web:
- **mudipu.dev** → Landing page (this repo)
- **app.mudipu.dev** → Platform & Hub (mudipu-web)
- **docs.mudipu.dev** → Documentation (mudipu-docs)

## 🔗 Links

- Platform: `http://localhost:3000/app`
- Hub: `http://localhost:3000/hub`
- GitHub: `https://github.com/santnayak/mudipu`

## 🎨 Design Highlights

- **Gradient text** on "AI Agent" headline
- **Animated floating logo** in hero
- **Hover effects** on feature cards (border glow)
- **Code snippets** in How It Works section
- **Responsive** - mobile-first design
- **Accessibility** - semantic HTML, ARIA labels

## 📝 Future Enhancements

- [ ] Add testimonials section
- [ ] Create pricing page (if needed)
- [ ] Add video demo/walkthrough
- [ ] Implement dark/light mode toggle
- [ ] Add newsletter signup
