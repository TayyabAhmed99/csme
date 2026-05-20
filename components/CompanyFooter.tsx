import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export function CompanyFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-black/10 py-10 text-white"
      style={{ backgroundColor: "#605e7b" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:items-start">
        <p className="text-center text-sm text-white/80 sm:text-left">
          <span className="font-semibold text-white">{siteConfig.companyIntro}</span>
          <span className="mt-2 block text-xs text-white/55">
            Affordable, reliable, safe.
          </span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <li>
            <Link href={ROUTES.touristHandsFree} className="hover:text-white">
              Tourist Hands Free
            </Link>
          </li>
          <li>
            <Link href={ROUTES.fxDiscovery} className="hover:text-white">
              FX Discovery
            </Link>
          </li>
          <li>
            <Link href={ROUTES.privacy} className="hover:text-white">
              Privacy
            </Link>
          </li>
          <li>
            <Link href={ROUTES.terms} className="hover:text-white">
              Terms
            </Link>
          </li>
          <li>
            <Link href={ROUTES.support} className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-white/45">
        © {year} {siteConfig.companyIntro}. All rights reserved.
      </p>
    </footer>
  );
}
