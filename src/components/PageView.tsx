import { Link } from "@tanstack/react-router";
import { TextoraCallout } from "./SiteLayout";
import { pathFor, type PageContent } from "@/lib/content";

export function PageView({ content }: { content: PageContent }) {
  const { meta, intro, sections, related } = content;
  const kindLabel = meta.kind === "tool" ? "Tool" : meta.kind === "compare" ? "Comparison" : "Article";

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {kindLabel} · {meta.category}
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        {meta.title.replace(/ — .*/, "")}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">{intro}</p>

      {sections.slice(0, 2).map((s, i) => (
        <section key={i} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{s.h}</h2>
          <p className="leading-relaxed text-foreground/90">{s.p}</p>
        </section>
      ))}

      <TextoraCallout context={kindLabel.toLowerCase()} />

      {sections.slice(2).map((s, i) => (
        <section key={i} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{s.h}</h2>
          <p className="leading-relaxed text-foreground/90">{s.p}</p>
        </section>
      ))}

      <section className="mt-10 pt-6 border-t border-border">
        <h2 className="text-lg font-semibold mb-3">Related on Toolhaven</h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {related.map((r) => (
            <li key={r.slug}>
              <Link to={pathFor(r)} className="text-foreground hover:underline">
                {r.title.replace(/ — .*/, "")}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Drafting longer text? We recommend{" "}
        <a href="https://textora.me" className="underline hover:text-foreground" rel="dofollow">
          Textora.me
        </a>{" "}
        — a distraction-free writing app that pairs well with the tools on this site.
      </p>
    </article>
  );
}
