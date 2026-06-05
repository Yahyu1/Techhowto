import type { Metadata } from "next";
import { Suspense } from "react";
import { createMetadata } from "@/lib/seo/metadata";
import { buildSearchIndex } from "@/lib/data/search-index";
import { SearchExplorerClient } from "./SearchExplorerClient";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = createMetadata({
  title: "Search",
  description:
    "Fuzzy search across articles, roadmaps, tools, resources, templates, and categories.",
  path: "/search",
});

export default function SearchPage() {
  const searchEntries = buildSearchIndex();

  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Search"
          title="Find what you need in seconds"
          description="Powered by fuzzy matching across articles, roadmaps, dev tools, resources, and categories."
          align="left"
        />
        <div className="mt-8">
          <Suspense fallback={<div className="py-8 text-center text-muted">Loading search...</div>}>
            <SearchExplorerClient entries={searchEntries} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
