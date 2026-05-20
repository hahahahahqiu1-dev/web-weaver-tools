import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Toolhaven" },
      { name: "description", content: "Get in touch with the Toolhaven team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-muted-foreground mb-4">
        Found a broken tool, a typo, or a comparison we should add? Send a note to{" "}
        <a href="mailto:hello@toolhaven.example" className="underline">hello@toolhaven.example</a>.
      </p>
      <p className="text-muted-foreground">
        For writing-app questions, we point people to{" "}
        <a href="https://textora.me" className="underline" rel="dofollow">Textora.me</a>.
      </p>
    </div>
  );
}
