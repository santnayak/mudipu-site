import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import Logo from '@/components/Logo'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="transition hover:opacity-80">
            <Logo size="md" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 text-center animate-fadeIn">
          <h1 className="mb-4 text-5xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: April 21, 2026</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 md:p-12 animate-fadeIn">
          {/* TL;DR */}
          <div className="mb-8 rounded-lg border border-primary/30 bg-primary/10 p-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="mb-2 text-xl font-semibold">TL;DR</h2>
                <p className="text-foreground">
                  We currently do not collect, track, or store any personal data from
                  visitors to this website. This is an open-source project website.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Data Collection */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                Data Collection
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This website is a static landing page for the Mudipu open-source project.
                  We do not use cookies, analytics, or any tracking mechanisms.
                </p>
                <p>
                  <strong className="text-foreground">We do not collect:</strong>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Personal information (name, email, etc.)</li>
                  <li>Browsing behavior or analytics</li>
                  <li>Cookies or local storage data</li>
                  <li>IP addresses or geolocation data</li>
                </ul>
              </div>
            </section>

            {/* Self-Hosted Platform */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                Self-Hosted Platform
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mudipu is designed to be self-hosted on your own infrastructure. When you
                  deploy the platform:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong className="text-foreground">Your data stays with you</strong> —
                    traces, metrics, and agent data remain in your own database
                  </li>
                  <li>
                    <strong className="text-foreground">No telemetry</strong> — we do not
                    collect usage data from deployed instances
                  </li>
                  <li>
                    <strong className="text-foreground">Full control</strong> — you manage
                    access, retention, and security policies
                  </li>
                </ul>
              </div>
            </section>

            {/* GitHub Integration */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                GitHub Integration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This website links to our{' '}
                  <a
                    href="https://github.com/santnayak/mudipu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub repository
                  </a>
                  . When you visit GitHub:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>GitHub's own privacy policy applies</li>
                  <li>We do not receive or process data from your GitHub activity</li>
                  <li>Contributions are governed by GitHub's terms of service</li>
                </ul>
              </div>
            </section>

            {/* External Links */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                External Links
              </h2>
              <div className="text-muted-foreground">
                <p>
                  This website may contain links to external sites (e.g., documentation
                  hosting, package registries). We are not responsible for the privacy
                  practices of these external sites. Please review their privacy policies
                  independently.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                Changes to This Policy
              </h2>
              <div className="text-muted-foreground">
                <p>
                  As Mudipu is an open-source project, any changes to this privacy policy
                  will be reflected in the{' '}
                  <a
                    href="https://github.com/santnayak/mudipu-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    website repository
                  </a>{' '}
                  with version history tracked via Git commits.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-primary">Contact</h2>
              <div className="text-muted-foreground">
                <p>
                  If you have questions about this privacy policy or the Mudipu project:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>
                    Email:{' '}
                    <a href="mailto:santhoshnayak0903@gmail.com" className="text-primary hover:underline">
                      santhoshnayak0903@gmail.com
                    </a>
                  </li>
                  <li>
                    GitHub Issues:{' '}
                    <a
                      href="https://github.com/santnayak/mudipu/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/santnayak/mudipu/issues
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold transition hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
