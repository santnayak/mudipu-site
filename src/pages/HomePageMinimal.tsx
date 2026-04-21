import { Github, Activity, Globe, Code } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePageMinimal() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Logo size="md" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center animate-fadeIn w-full">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="animate-float">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-primary/10">
                <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">mudipu</span>
          </h1>

          {/* Tagline */}
          <p className="mb-8 sm:mb-12 text-lg sm:text-xl lg:text-2xl text-muted-foreground px-4">
            AI Agent Observability & Registry
            <br />
            <span className="text-sm sm:text-base">Debug. Monitor. Discover.</span>
          </p>

          {/* Products Grid */}
          <div className="mb-8 sm:mb-12 grid gap-4 sm:gap-6 md:grid-cols-3 text-left">
            {/* Platform */}
            <div className="group rounded-xl border border-border bg-card p-6 sm:p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">Platform</h3>
              <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">
                Complete observability infrastructure for AI agent systems
              </p>
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                Coming Soon
              </span>
            </div>

            {/* Hub */}
            <div className="group rounded-xl border border-border bg-card p-6 sm:p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">Hub</h3>
              <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">
                Agent registry for discovery and publishing
              </p>
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                Coming Soon
              </span>
            </div>

            {/* SDK */}
            <div className="group rounded-xl border border-border bg-card p-6 sm:p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">
                <a 
                  href="https://github.com/santnayak/mudipu-python" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  SDK
                </a>
              </h3>
              <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">
                Powerful development kit for seamless integration
              </p>
              <span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-500">
                v1.0 Available
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center px-4">
            <a
              href="https://github.com/santnayak/mudipu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition hover:bg-muted active:scale-95">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-between">
            <Logo size="md" />
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <Link to="/imprint" className="hover:text-primary transition">Imprint</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
