import { TouristHandsFreeHeader } from "@/components/TouristHandsFreeHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ScrollAndPageAnalytics } from "@/components/ScrollAndPageAnalytics";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TelegramWhySection } from "@/components/sections/TelegramWhySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";
import { getInboundParams } from "@/lib/query";
import {
  buildMarketingStartParam,
  getTelegramDeepLink,
  TELEGRAM_PLACEMENT,
} from "@/lib/telegram";

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function TouristHandsFreePage({ searchParams }: PageProps) {
  const inbound = getInboundParams(searchParams);
  const marketing = buildMarketingStartParam(inbound);
  const hasMarketingRef = marketing !== null;
  const resolvedStartExample = marketing ?? TELEGRAM_PLACEMENT.hero;

  const t = {
    header: getTelegramDeepLink(TELEGRAM_PLACEMENT.header, searchParams),
    hero: getTelegramDeepLink(TELEGRAM_PLACEMENT.hero, searchParams),
    howItWorks: getTelegramDeepLink(TELEGRAM_PLACEMENT.howItWorks, searchParams),
    finalCta: getTelegramDeepLink(TELEGRAM_PLACEMENT.finalCta, searchParams),
    footer: getTelegramDeepLink(TELEGRAM_PLACEMENT.footer, searchParams),
    sticky: getTelegramDeepLink(TELEGRAM_PLACEMENT.sticky, searchParams),
  };

  const shareUrl = `${siteConfig.siteUrl}${ROUTES.touristHandsFree}`;

  return (
    <>
      <ScrollAndPageAnalytics
        hasMarketingRef={hasMarketingRef}
        resolvedStartExample={resolvedStartExample}
        src={inbound.src}
      />
      <TouristHandsFreeHeader bookTelegramHref={t.header} />
      <main className="pb-24 md:pb-0">
        <HeroSection telegramHref={t.hero} />
        <ServiceFeaturesSection />
        <HowItWorksSection telegramHref={t.howItWorks} />
        <TelegramWhySection />
        <FaqSection />
        <FinalCtaSection telegramHref={t.finalCta} shareUrl={shareUrl} />
      </main>
      <SiteFooter telegramHref={t.footer} />
      <MobileCtaBar href={t.sticky} />
    </>
  );
}
