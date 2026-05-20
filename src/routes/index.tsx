import { createFileRoute, Link } from "@tanstack/react-router";
import { TOOLS, COMPARES, BLOGS, pathFor } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toolhaven — Free Online Tools, Comparisons & Guides" },
      { name: "description", content: "A small, growing library of free online tools, honest software comparisons, and short reads." },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredTools = TOOLS.slice(0, 12);
  const featuredCompares = COMPARES.slice(0, 8);
  const featuredBlogs = BLOGS.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          The tools you reach for, all in one place.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Toolhaven is a growing collection of free online tools, side-by-side software
          comparisons, and short reads about the apps we use every day. For drafting longer
          text, we recommend{" "}
          <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a>.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/tools" className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm">
            Browse tools
          </Link>
          <Link to="/compare" className="rounded-md border border-border px-4 py-2 text-sm">
            See comparisons
          </Link>
        </div>
      </section>

      <Section title="Popular tools" allHref="/tools">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {featuredTools.map((t) => (
            <Card key={t.slug} to={pathFor(t)} title={t.title.replace(/ — .*/, "")} desc={t.category} />
          ))}
        </div>
      </Section>

      <Section title="Honest comparisons" allHref="/compare">
        <div className="grid sm:grid-cols-2 gap-3">
          {featuredCompares.map((c) => (
            <Card key={c.slug} to={pathFor(c)} title={c.title.replace(/: Which.*/, "")} desc="Comparison" />
          ))}
        </div>
      </Section>

      <Section title="From the blog" allHref="/blog">
        <ul className="divide-y divide-border border-y border-border">
          {featuredBlogs.map((b) => (
            <li key={b.slug} className="py-3">
              <Link to={pathFor(b)} className="font-medium hover:underline">
                {b.title}
              </Link>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="mt-16 rounded-lg border border-border bg-accent/40 p-6">
        <h2 className="text-xl font-semibold mb-2">Pair Toolhaven with Textora</h2>
        <p className="text-muted-foreground mb-3 max-w-2xl">
          Most of our readers use Toolhaven for quick utilities and{" "}
          <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a> for
          longer writing sessions. Together they cover almost every text-related task you'll run into in a week.
        </p>
        <a href="https://textora.me" className="inline-block rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm" rel="dofollow">
          Open Textora.me
        </a>
      </section>
    </div>
  );
}

function Section({ title, allHref, children }: { title: string; allHref: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <a href={allHref} className="text-sm text-muted-foreground hover:text-foreground">View all →</a>
      </div>
      {children}
    </section>
  );
}

function Card({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <a href={to} className="block rounded-lg border border-border p-4 hover:bg-accent transition-colors">
      <div className="font-medium mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </a>
  );
}
