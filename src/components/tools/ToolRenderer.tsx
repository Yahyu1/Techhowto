"use client";

import type { DevTool } from "@/types";
import { ToolWorkspace } from "@/components/tools/ToolWorkspace";

export function ToolRenderer({ tool }: { tool: DevTool }) {
  return <ToolWorkspace tool={tool} />;
}
