"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "120+", label: "Tutorials" },
  { value: "10", label: "Roadmaps" },
  { value: "15", label: "Dev Tools" },
  { value: "50K+", label: "Readers" },
];

const codeSnippet = `// TechHowTo — ship faster
const stack = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node", "PostgreSQL", "Redis"],
  deploy: ["Vercel", "Docker", "CI/CD"],
};

export async function launch(product: Product) {
  await validate(product);
  return deploy(product);
}`;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[300px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-400">
              <Sparkles size={14} />
              Premium developer platform
            </div>

            <h1 className="font-display text-hero font-bold">
              <span className="block">Learn.</span>
              <span className="block">Build.</span>
              <span className="block gradient-text">Launch.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Master modern technology with premium tutorials, developer
              roadmaps, and production-ready tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/roadmaps" size="lg">
                Start Learning
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/roadmaps" variant="secondary" size="lg">
                Explore Roadmaps
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass glow-border rounded-xl p-4"
                >
                  <div className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass glow-border aurora rounded-2xl p-1 animate-float">
              <div className="rounded-xl bg-[#0a0f1e] p-4 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-muted">
                    launch.ts
                  </span>
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-cyan-300/90 sm:text-sm">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
