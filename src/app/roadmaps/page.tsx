import type { Metadata } from "next";
import { roadmaps } from "@/lib/data/roadmaps";
import { createMetadata } from "@/lib/seo/metadata";
import { RoadmapsDirectory } from "@/components/roadmaps/RoadmapsDirectory";

export const metadata: Metadata = createMetadata({
  title: "Career Roadmaps",
  description:
    "Explore structured tech career roadmaps with project-based phases, core skills, and practical resources.",
  path: "/roadmaps",
});

export default function RoadmapsPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Learning Tracks
          </p>
          <h1 className="mt-3 font-display text-h1 font-bold text-text">
            Build Your Tech Career Path
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            Choose from curated, role-specific roadmaps designed to take you
            from fundamentals to production-ready projects.
          </p>
        </div>
      </div>

      <RoadmapsDirectory roadmaps={roadmaps} />
    </div>
  );
}
