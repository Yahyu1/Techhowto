import { getLatestArticles } from "@/lib/data/articles";
import { SITE } from "@/lib/constants";

export async function GET() {
  const articles = getLatestArticles(20);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name}</title>
    <link>${SITE.url}</link>
    <description>${SITE.description}</description>
    <language>en-us</language>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${SITE.url}/blog/${a.slug}</link>
      <guid>${SITE.url}/blog/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description><![CDATA[${a.excerpt}]]></description>
      <category>${a.category}</category>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
