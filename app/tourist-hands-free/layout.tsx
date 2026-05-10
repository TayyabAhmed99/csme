import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

const url = `${siteConfig.siteUrl}${ROUTES.touristHandsFree}`;

export const metadata: Metadata = {
  title: "Tourist Hands Free | Luggage storage & transfers | Tarragona",
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

export default function TouristHandsFreeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
