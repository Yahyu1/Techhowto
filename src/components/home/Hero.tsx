"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import { CodePreview } from "@/components/home/CodePreview";
import { getSiteStats } from "@/lib/data/stats";
import { GlassCard } from "@/components/ui/GlassCard";

const stats = getSiteStats();

const statItems = [
  { value: String(stats.articles), label: "Articles" },
  { value: String(stats.roadmaps), label: "Roadmaps" },
  { value: String(stats.tools), label: "Dev Tools" },
  { value: stats.readers, label: "Readers" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-500 dark:text-cyan-400">
              <Sparkles size={14} />
              Premium developer platform
            </div>

            <h1 className="font-display text-hero font-bold text-text">
              <span className="block">Learn.</span>
              <span className="block">Build.</span>
              <span className="block gradient-text">Launch.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Master modern technology with premium tutorials, developer
              roadmaps, and production-ready tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <GlassButton href="/roadmaps" variant="primary" size="lg">
                Start Learning
                <ArrowRight size={18} className="ml-2" />
              </GlassButton>
              <GlassButton href="/roadmaps" variant="glass" size="lg">
                Explore Roadmaps
              </GlassButton>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {statItems.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <GlassCard glow padding="sm">
                    <div className="font-display text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CodePreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
