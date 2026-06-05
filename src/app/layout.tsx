import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: SITE.name,
    description: SITE.description,
    path: "/",
  }),
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [organizationSchema(), websiteSchema()];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} pb-nav lg:pb-0`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
