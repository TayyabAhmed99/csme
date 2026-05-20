import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

const thfFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-thf",
  display: "swap",
});

const url = `${siteConfig.siteUrl}${ROUTES.touristHandsFree}`;

export const metadata: Metadata = {
  title: "Tourist Hands Free | Travel light in Tarragona",
  description:
    "Book in minutes on Telegram: secure luggage storage, pickup, and delivery in Tarragona. Travel hands-free.",
  keywords: [
    "Tourist Hands Free",
    "luggage storage Tarragona",
    "luggage pickup Tarragona",
    "luggage delivery Tarragona",
    "hands free travel Tarragona",
    "Tarragona station luggage",
    "hotel luggage pickup Tarragona",
  ],
  openGraph: {
    title: "Tourist Hands Free · Tarragona",
    description:
      "Secure luggage storage and transfers — book on Telegram in under two minutes.",
    type: "website",
    url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F4C81",
};

export default function TouristHandsFreeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`thf-product min-h-screen ${thfFont.variable}`}>{children}</div>
  );
}
