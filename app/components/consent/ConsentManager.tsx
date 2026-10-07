"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  OPEN_PREFERENCES_EVENT,
  acceptConsent,
  getConsent,
  getServerConsent,
  initConsent,
  rejectConsent,
  subscribe,
} from "./consent";
import { robotoBold } from "@/app/layout";

type Props = {
  privacyPolicyHref?: string;
};

export default function ConsentManager({
  privacyPolicyHref = "/integritetspolicy",
}: Props) {
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    initConsent();

    const open = () => setReopened(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  const visible = consent === "unknown" || (reopened && consent !== "pending");
  if (!visible) return null;

  const accept = () => {
    acceptConsent();
    setReopened(false);
  };

  const reject = () => {
    rejectConsent();
    setReopened(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-text"
      className={`${robotoBold.className} fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 bg-zinc-950/10`}
    >
      <div className="mx-auto max-w-3xl border border-neutral-200 bg-[#f0f5f2] p-5 shadow-2xl sm:p-6">
        <h2 className="text-base font-semibold text-neutral-900">
          Vi använder reklamcookies
        </h2>

        <p
          id="cookie-consent-text"
          className="mt-2 text-sm leading-relaxed text-neutral-600"
        >
          Med ditt samtycke använder vi Google Ads-cookies och liknande tekniker
          för att mäta hur effektiv vår annonsering är. Google kan också använda
          dessa uppgifter för att anpassa annonser. Du kan acceptera eller
          avvisa dessa cookies och ändra ditt val när som helst under
          &ldquo;Cookieinställningar&rdquo;. Läs mer i vår{" "}
          <a
            href={privacyPolicyHref}
            className="font-medium text-neutral-900 underline underline-offset-2"
          >
            Integritetspolicy
          </a>{" "}
          och om{" "}
          <a
            href="https://business.safety.google/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 underline underline-offset-2"
          >
            hur Google använder dina uppgifter
          </a>
          .
        </p>

        {consent !== "unknown" && (
          <p className="mt-2 text-sm text-neutral-500">
            Ditt nuvarande val:{" "}
            <span className="font-medium text-neutral-900">
              {consent === "accepted" ? "accepterat" : "avvisat"}
            </span>
          </p>
        )}

        {/* Both buttons are deliberately the same size and weight. */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-neutral-900 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            Avvisa
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
}
