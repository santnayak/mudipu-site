import { 
  Activity, 
  Code, 
  Github, 
  Globe, 
  Heart, 
  Layers, 
  Search, 
  Shield, 
  Terminal, 
  Zap 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Logo size="sm" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container relative mx-auto px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center animate-fadeIn">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="animate-float">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
              <span className="gradient-text">AI Agent</span>
              <br />
              <span className="text-foreground">Observability & Registry</span>
            </h1>

            {/* Tagline */}
            <p className="mb-12 text-xl text-muted-foreground lg:text-2xl">
              Debug, monitor, and discover AI agents.
              <br />
              Open-source platform with built-in agent registry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="http://localhost:3000/app"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Terminal className="h-5 w-5" />
                Open Platform
              </a>
              <a
                href="http://localhost:3000/hub"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground transition hover:bg-muted"
              >
                <Search className="h-5 w-5" />
                Browse Hub
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-12">
              <div>
                <div className="text-4xl font-bold text-primary">142</div>
                <div className="mt-2 text-sm text-muted-foreground">Agents</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">1.2K+</div>
                <div className="mt-2 text-sm text-muted-foreground">Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">Open</div>
                <div className="mt-2 text-sm text-muted-foreground">Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Built for AI Engineers</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to ship reliable AI agents
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Trace Debugging</h3>
              <p className="text-muted-foreground">
                Step through every LLM call, tool invocation, and decision. Rich context and token metrics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Health Metrics</h3>
              <p className="text-muted-foreground">
                Monitor success rates, latency, cost per session, and context health in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Agent Hub</h3>
              <p className="text-muted-foreground">
                Discover, publish, and share AI agents. Browse by category, tools, and capabilities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">OpenAI Compatible</h3>
              <p className="text-muted-foreground">
                Drop-in replacement gateway. Works with any OpenAI SDK or Langchain client.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Self-Hosted</h3>
              <p className="text-muted-foreground">
                Your data stays yours. Deploy on your infrastructure with Docker Compose.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-xl border border-border bg-card p-8 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Multi-Agent Ready</h3>
              <p className="text-muted-foreground">
                Track complex workflows with multiple agents, handoffs, and parallel executions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to full observability
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Point your OpenAI client to Mudipu Gateway</h3>
                <p className="mb-4 text-muted-foreground">
                  Change your base URL to <code className="rounded bg-muted px-2 py-1 text-sm">http://localhost:9090/v1</code>
                </p>
                <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm">
                  <code className="text-foreground">
                    <span className="text-muted-foreground"># Python</span><br />
                    client = OpenAI(base_url="http://localhost:9090/v1")
                  </code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Run your agents as usual</h3>
                <p className="text-muted-foreground">
                  No code changes needed. Mudipu automatically captures traces, metrics, and health data.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Debug and monitor in real-time</h3>
                <p className="text-muted-foreground">
                  Open the dashboard at <code className="rounded bg-muted px-2 py-1 text-sm">localhost:3000/app</code> to see traces, metrics, and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Ready to debug smarter?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Join developers shipping reliable AI agents with Mudipu.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com/santnayak/mudipu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-lg font-semibold transition hover:bg-muted"
              >
                <Github className="h-5 w-5" />
                Star on GitHub
              </a>
              <a
                href="http://localhost:3000/app"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Zap className="h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Logo size="lg" />
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="http://localhost:3000/app" className="hover:text-primary transition">Platform</a></li>
                <li><a href="http://localhost:3000/hub" className="hover:text-primary transition">Agent Hub</a></li>
                <li><a href="https://github.com/santnayak/mudipu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Documentation</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://github.com/santnayak/mudipu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a></li>
                <li><Link to="/imprint" className="hover:text-primary transition">Imprint</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition">Privacy</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Mudipu. Open source under GPL-3.0 License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
