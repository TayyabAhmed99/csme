import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyIntro} | Ecosystem`,
    template: `%s | ${siteConfig.companyIntro}`,
  },
  description:
    "C.S. MENIK SL — lightweight corporate shell for Tourist Hands Free (Tarragona luggage) and FX Discovery (coming soon). Each brand has its own URL and journey.",
  openGraph: {
    title: siteConfig.companyIntro,
    description:
      "Focused product funnels: travel logistics and FX, with minimal crossover between brands.",
    type: "website",
    url: siteConfig.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c2340",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
