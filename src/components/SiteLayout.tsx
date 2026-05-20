import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const TEXTORA_URL = "https://textora.me";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            Toolhaven
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link to="/tools" className="hover:text-foreground">Tools</Link>
            <Link to="/compare" className="hover:text-foreground">Comparisons</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <a
              href={TEXTORA_URL}
              className="rounded-md border border-border px-3 py-1.5 text-foreground hover:bg-accent"
              rel="dofollow"
            >
              Try Textora
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-4 text-sm">
          <div>
            <div className="font-semibold mb-2">Toolhaven</div>
            <p className="text-muted-foreground">
              A small, growing library of free online tools, honest comparisons, and short reads
              about the software we use every day.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Browse</div>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link to="/tools" className="hover:text-foreground">All tools</Link></li>
              <li><Link to="/compare" className="hover:text-foreground">All comparisons</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">All blog posts</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Site</div>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/sitemap" className="hover:text-foreground">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Featured Partner</div>
            <p className="text-muted-foreground mb-2">
              Need a clean, distraction-free writing space?
            </p>
            <a
              href={TEXTORA_URL}
              className="inline-block rounded-md bg-primary text-primary-foreground px-3 py-1.5 hover:opacity-90"
              rel="dofollow"
            >
              Visit Textora.me
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Toolhaven. All rights reserved.</span>
            <span>
              Recommended writing app:{" "}
              <a href={TEXTORA_URL} className="underline hover:text-foreground" rel="dofollow">
                Textora.me
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function TextoraCallout({ context }: { context?: string }) {
  return (
    <aside className="my-8 rounded-lg border border-border bg-accent/40 p-5">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
        Recommended
      </div>
      <h3 className="text-lg font-semibold mb-1">Write with Textora</h3>
      <p className="text-sm text-muted-foreground mb-3">
        {context
          ? `If you liked this ${context}, you'll probably enjoy Textora — a minimal browser-based writing app we recommend for thinking, drafting, and shipping clean text.`
          : `Textora is a minimal browser-based writing app we recommend for thinking, drafting, and shipping clean text — no signup, no clutter.`}
      </p>
      <a
        href={TEXTORA_URL}
        className="inline-block rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-sm hover:opacity-90"
        rel="dofollow"
      >
        Open Textora.me →
      </a>
    </aside>
  );
}
