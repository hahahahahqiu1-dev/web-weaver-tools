import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildContent, getPage } from "@/lib/content";
import { PageView } from "@/components/PageView";

export const Route = createFileRoute("/compare/$slug")({
  loader: ({ params }) => {
    const meta = getPage("compare", params.slug);
    if (!meta) throw notFound();
    return { content: buildContent(meta) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.content.meta.title} | Toolhaven` },
          { name: "description", content: loaderData.content.meta.description },
        ]
      : [],
  }),
  component: ComparePage,
  notFoundComponent: () => <div className="p-10 text-center">Comparison not found.</div>,
});

function ComparePage() {
  const { content } = Route.useLoaderData();
  return <PageView content={content} />;
}
