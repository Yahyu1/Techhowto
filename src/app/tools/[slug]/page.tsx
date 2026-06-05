import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllDevToolSlugs,
  getDevToolBySlug,
} from "@/lib/data/dev-tools";
import { createMetadata } from "@/lib/seo/metadata";
import { ToolRenderer } from "@/components/tools/ToolRenderer";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDevToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getDevToolBySlug(slug);

  if (!tool) {
    return createMetadata({
      title: "Tool Not Found",
      description: "The requested developer tool could not be found.",
      path: `/tools/${slug}`,
    });
  }

  return createMetadata({
    title: tool.name,
    description: tool.description,
    path: `/tools/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getDevToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ToolRenderer tool={tool} />
      </div>
    </section>
  );
}
