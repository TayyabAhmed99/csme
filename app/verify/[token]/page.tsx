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
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-lg px-4 py-10 sm:py-14">
        <Link
          href={ROUTES.touristHandsFree}
          className="text-sm font-medium text-brand-accent hover:underline"
        >
          ← Tourist Hands Free
        </Link>
        <div className="mt-8">
          <VerifyCard data={data} telegramSupportHref={telegramSupportHref} />
        </div>
        <p className="mt-6 text-center text-xs text-brand/50">
          Token reference: <span className="font-mono">{token}</span>
        </p>
      </div>
    </div>
  );
}
