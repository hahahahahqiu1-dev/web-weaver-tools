import { createFileRoute, Link } from "@tanstack/react-router";
import { TOOLS, pathFor } from "@/lib/content";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "All Free Online Tools — Toolhaven" },
      { name: "description", content: `Browse ${TOOLS.length}+ free online tools for writing, developers, designers, and everyday tasks.` },
    ],
  }),
  component: ToolsIndex,
});

function ToolsIndex() {
  const byCat: Record<string, typeof TOOLS> = {};
  for (const t of TOOLS) (byCat[t.category] ||= []).push(t);
  const cats = Object.keys(byCat).sort();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">All Tools</h1>
      <p className="text-muted-foreground mb-8">{TOOLS.length} free online tools, grouped by what they're for.</p>

      {cats.map((c) => (
        <section key={c} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">{c}</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {byCat[c].map((t) => (
              <li key={t.slug}>
                <Link to={pathFor(t)} className="text-foreground hover:underline">
                  {t.title.replace(/ — .*/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="mt-8 text-sm text-muted-foreground">
        For longer writing,{" "}
        <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a> is our pick.
      </p>
    </div>
  );
}
