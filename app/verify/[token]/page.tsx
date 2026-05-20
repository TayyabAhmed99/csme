import Link from "next/link";
import { VerifyCard } from "@/components/verify/VerifyCard";
import { ROUTES } from "@/lib/routes";
import { getPublicVerifyData } from "@/lib/verify-data";
import {
  getTelegramDeepLink,
  TELEGRAM_PLACEMENT,
} from "@/lib/telegram";

type VerifyPageProps = {
  params: { token: string };
};

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { token } = params;
  const data = await getPublicVerifyData(token);
  const telegramSupportHref = getTelegramDeepLink(
    TELEGRAM_PLACEMENT.verifySupport,
    {}
  );

  return (
    <div className="thf-product min-h-screen bg-thf-cream font-thf">
      <div className="mx-auto max-w-lg px-4 py-10 sm:py-14">
        <Link
          href={ROUTES.touristHandsFree}
          className="text-sm font-semibold text-thf-navy hover:underline"
        >
          ← Tourist Hands Free
        </Link>
        <div className="mt-8">
          <VerifyCard data={data} telegramSupportHref={telegramSupportHref} />
        </div>
        <p className="mt-6 text-center text-xs text-thf-muted">
          Token reference: <span className="font-mono">{token}</span>
        </p>
      </div>
    </div>
  );
}
