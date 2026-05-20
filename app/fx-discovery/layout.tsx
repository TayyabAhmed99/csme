import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const fxFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-fx",
  display: "swap",
});

const fxMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-fx-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FX Discovery",
  description:
    "FX Discovery — market intelligence and discovery tools for the next generation of traders.",
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function FxDiscoveryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`fx-product min-h-screen ${fxFont.variable} ${fxMono.variable}`}
    >
      {children}
    </div>
  );
}
