import { createFileRoute, Link } from "@tanstack/react-router";
import { ALL_PAGES, pathFor } from "@/lib/content";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Toolhaven" },
      { name: "description", content: `Full sitemap of all ${ALL_PAGES.length} pages on Toolhaven.` },
    ],
  }),
  component: Sitemap,
});

function Sitemap() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">Sitemap</h1>
      <p className="text-muted-foreground mb-8">{ALL_PAGES.length} pages total.</p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-xs">
        {ALL_PAGES.map((p) => (
          <li key={p.kind + p.slug}>
            <Link to={pathFor(p)} className="text-muted-foreground hover:text-foreground">
              {p.title.replace(/ — .*/, "").replace(/: Which.*/, "")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
