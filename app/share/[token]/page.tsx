import { redirect } from "next/navigation";

type SharePageProps = {
  params: { token: string };
};

/**
 * MVP: treat share token as referral ref on the main landing page.
 * Replace with API-driven resolution (promo vs booking_verify) when your helper API is live.
 */
export default function ShareTokenPage({ params }: SharePageProps) {
  redirect(`/?ref=${encodeURIComponent(params.token)}`);
}
