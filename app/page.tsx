import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ScrollAndPageAnalytics } from "@/components/ScrollAndPageAnalytics";
import { HeroSection } from "@/components/sections/HeroSection";
import { SpecializedPlatformsSection } from "@/components/sections/SpecializedPlatformsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PickupDeliverySection } from "@/components/sections/PickupDeliverySection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { TelegramWhySection } from "@/components/sections/TelegramWhySection";
import { AboutCSMenikSection } from "@/components/sections/AboutCSMenikSection";
import { VerificationSection } from "@/components/sections/VerificationSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { siteConfig } from "@/lib/config";
import { getInboundParams } from "@/lib/query";
import {
  buildMarketingStartParam,
  getTelegramDeepLink,
  TELEGRAM_PLACEMENT,
} from "@/lib/telegram";

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function Home({ searchParams }: PageProps) {
  const inbound = getInboundParams(searchParams);
  const marketing = buildMarketingStartParam(inbound);
  const hasMarketingRef = marketing !== null;
  const resolvedStartExample = marketing ?? TELEGRAM_PLACEMENT.hero;

  const t = {
    header: getTelegramDeepLink(TELEGRAM_PLACEMENT.header, searchParams),
    hero: getTelegramDeepLink(TELEGRAM_PLACEMENT.hero, searchParams),
    spacehunters: getTelegramDeepLink(
      TELEGRAM_PLACEMENT.spacehunters,
      searchParams
    ),
    howItWorks: getTelegramDeepLink(TELEGRAM_PLACEMENT.howItWorks, searchParams),
    security: getTelegramDeepLink(TELEGRAM_PLACEMENT.security, searchParams),
    verifySupport: getTelegramDeepLink(TELEGRAM_PLACEMENT.verifySupport, searchParams),
    finalCta: getTelegramDeepLink(TELEGRAM_PLACEMENT.finalCta, searchParams),
    footer: getTelegramDeepLink(TELEGRAM_PLACEMENT.footer, searchParams),
    sticky: getTelegramDeepLink(TELEGRAM_PLACEMENT.sticky, searchParams),
  };

  const shareUrl = `${siteConfig.siteUrl}/`;

  return (
    <>
      <ScrollAndPageAnalytics
        hasMarketingRef={hasMarketingRef}
        resolvedStartExample={resolvedStartExample}
        src={inbound.src}
      />
      <SiteHeader bookTelegramHref={t.header} />
      <main className="pb-24 md:pb-0">
        <HeroSection telegramHref={t.hero} />
        <SpecializedPlatformsSection spacehuntersTelegramHref={t.spacehunters} />
        <TrustStrip />
        <HowItWorksSection telegramHref={t.howItWorks} />
        <PickupDeliverySection />
        <SecuritySection telegramHref={t.security} />
        <TelegramWhySection />
        <AboutCSMenikSection />
        <VerificationSection telegramHref={t.verifySupport} />
        <AudienceSection />
        <FaqSection />
        <FinalCtaSection telegramHref={t.finalCta} shareUrl={shareUrl} />
      </main>
      <SiteFooter telegramHref={t.footer} />
      <MobileCtaBar href={t.sticky} />
    </>
  );
}
