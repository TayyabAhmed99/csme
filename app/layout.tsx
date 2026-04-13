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
  title:
    "Hands-Free Tarragona | Luggage Pickup & Later Delivery | C.S. MENIK SL",
  description:
    "Hands-Free Tarragona by C.S. MENIK SL. Get an instant quote, book in under 2 minutes, and explore Tarragona without carrying your luggage. Pickup from station, hotel, or Airbnb.",
  keywords: [
    "luggage storage Tarragona",
    "luggage pickup Tarragona",
    "luggage delivery Tarragona",
    "hands free travel Tarragona",
    "Tarragona station luggage service",
    "hotel luggage pickup Tarragona",
    "Airbnb luggage service Tarragona",
  ],
  openGraph: {
    title: "Hands-Free Tarragona",
    description:
      "We collect your luggage and deliver it later — so you can explore Tarragona hands-free.",
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
