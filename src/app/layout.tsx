import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { StickyNewsletterCTA } from "@/components/conversion/StickyNewsletterCTA";
import { ExitIntentModal } from "@/components/conversion/ExitIntentModal";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('techhowto-theme');var d=document.documentElement;if(t==='light'||t==='dark'){d.classList.add(t);}else if(!t||t==='system'){d.classList.add(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
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
          <AuroraBackground />
          <FloatingParticles count={18} />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
          <StickyNewsletterCTA />
          <ExitIntentModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
