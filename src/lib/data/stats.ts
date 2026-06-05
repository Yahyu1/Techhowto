import { articles } from "./articles";
import { roadmaps } from "./roadmaps";
import { devTools } from "./dev-tools";

export function getSiteStats() {
  const totalViews = articles.reduce((sum, a) => sum + a.views, 0);
  return {
    articles: articles.length,
    roadmaps: roadmaps.length,
    tools: devTools.length,
    readers: totalViews >= 1000 ? `${Math.round(totalViews / 1000)}K+` : String(totalViews),
  };
}
