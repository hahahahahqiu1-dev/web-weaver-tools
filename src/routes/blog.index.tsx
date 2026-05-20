import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOGS, pathFor } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Toolhaven Blog" },
      { name: "description", content: `${BLOGS.length} short reads about software, productivity, and the web.` },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">The Blog</h1>
      <p className="text-muted-foreground mb-8">
        {BLOGS.length} short reads about software, productivity, and the web.
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {BLOGS.map((b) => (
          <li key={b.slug} className="py-3">
            <Link to={pathFor(b)} className="font-medium hover:underline">
              {b.title}
            </Link>
            <p className="text-sm text-muted-foreground">{b.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted-foreground">
        Drafting an article?{" "}
        <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a> is the editor we use.
      </p>
    </div>
  );
}
