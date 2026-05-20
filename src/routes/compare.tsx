import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPARES, pathFor } from "@/lib/content";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Software Comparisons — Toolhaven" },
      { name: "description", content: `Side-by-side comparisons of ${COMPARES.length}+ popular software products.` },
    ],
  }),
  component: CompareIndex,
});

function CompareIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">Software Comparisons</h1>
      <p className="text-muted-foreground mb-8">
        {COMPARES.length} honest, side-by-side comparisons of tools we actually use.
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {COMPARES.map((c) => (
          <li key={c.slug}>
            <Link to={pathFor(c)} className="text-foreground hover:underline">
              {c.title.replace(/: Which.*/, "")}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted-foreground">
        Looking for a writing app? Try{" "}
        <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a>.
      </p>
    </div>
  );
}
