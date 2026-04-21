import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from '@/components/Logo'

export default function ImprintPage() {
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
          <h1 className="mb-4 text-5xl font-bold">Imprint</h1>
          <p className="text-muted-foreground">Legal Information</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 md:p-12 animate-fadeIn">
          <div className="space-y-8">
            {/* Information according to § 5 TMG */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-primary">
                Information according to § 5 TMG
              </h2>
              <div className="text-muted-foreground">
                <p>Santosh Nayak</p>
                <p>Mudipu Project</p>
                <p>Open Source Initiative</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-primary">Contact</h2>
              <div className="text-muted-foreground">
                <p>Email: santhoshnayak0903@gmail.com</p>
                <p>GitHub: github.com/santnayak/mudipu</p>
              </div>
            </section>

            {/* Responsible for content */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-primary">
                Responsible for content according to § 55 Abs. 2 RStV
              </h2>
              <div className="text-muted-foreground">
                <p>Santosh Nayak</p>
                <p>Open Source Project</p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-primary">Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Liability for Content
                  </h3>
                  <p>
                    As a service provider, we are responsible for our own content on these
                    pages according to § 7 para.1 TMG under general laws. However, according
                    to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored
                    third-party information or to investigate circumstances that indicate
                    illegal activity.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Liability for Links
                  </h3>
                  <p>
                    Our website contains links to external third-party websites over whose
                    content we have no influence. Therefore, we cannot assume any liability
                    for this third-party content. The respective provider or operator of the
                    pages is always responsible for the content of the linked pages.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Copyright</h3>
                  <p>
                    The content and works on these pages created by the site operators are
                    subject to open-source licenses. Third-party content is marked as such.
                    This project is released under the GNU General Public License v3.0 (GPL-3.0).
                  </p>
                </div>
              </div>
            </section>

            {/* Open Source Notice */}
            <section className="rounded-lg border border-primary/20 bg-primary/5 p-6">
              <h2 className="mb-3 text-xl font-semibold">Open Source Project</h2>
              <p className="text-muted-foreground">
                Mudipu is an open-source project released under the GNU General Public License v3.0 (GPL-3.0). You can
                find the source code, contribute, and report issues on{' '}
                <a
                  href="https://github.com/santnayak/mudipu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
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
