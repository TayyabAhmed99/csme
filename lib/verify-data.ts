import type { PublicVerifyData } from "@/lib/types";

/** Placeholder until helper API / PostgreSQL backs public verify. */
export async function getPublicVerifyData(
  _token: string
): Promise<PublicVerifyData> {
  return {
    bookingCode: "HFT-24001",
    status: "In secure hold",
    pickupWindow: "12:00 – 13:00",
    deliveryWindow: "18:00 – 19:00",
    bagCount: 2,
    securityStatus: "QR verified",
  };
}
