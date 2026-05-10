import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

type SharePageProps = {
  params: { token: string };
};

/**
 * MVP: treat share token as referral ref on the Tourist Hands Free funnel.
 * Replace with API-driven resolution (promo vs booking_verify) when your helper API is live.
 */
export default function ShareTokenPage({ params }: SharePageProps) {
  redirect(
    `${ROUTES.touristHandsFree}?ref=${encodeURIComponent(params.token)}`
  );
}
