import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Toolhaven" },
      { name: "description", content: "Toolhaven is a small library of free online tools, honest comparisons, and short reads." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 prose-like">
      <h1 className="text-3xl font-semibold mb-4">About Toolhaven</h1>
      <p className="text-muted-foreground mb-4">
        Toolhaven started as a personal bookmarks folder. Over time it grew into a small
        public library of the online utilities, comparisons, and short reads we found ourselves
        opening again and again.
      </p>
      <p className="text-muted-foreground mb-4">
        Everything on this site is free to use and works in your browser without an account.
        We don't sell your data and we don't run intrusive ads.
      </p>
      <p className="text-muted-foreground mb-4">
        For longer-form writing we recommend{" "}
        <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a> — a
        clean, distraction-free editor that pairs well with the small utilities here.
      </p>
    </div>
  );
}
