// Consent state, Consent Mode v2 signals and GTM loading.
// Next.js owns consent; GTM is only ever loaded after the visitor accepts.

export const GTM_ID = "GTM-TF7VVBTT";
export const OPEN_PREFERENCES_EVENT = "cookie-preferences:open";

const COOKIE_NAME = "site_consent";
const COOKIE_MAX_AGE_DAYS = 1; // banner reappears after this
const GTM_SCRIPT_ID = "gtm-loader";

// "pending" = not yet known (server render / before hydration)
// "unknown" = visitor has made no choice yet
export type ConsentState = "pending" | "unknown" | "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

// Must push the `arguments` object itself (not an array) for GTM to read it.
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

// The site runs Google Ads tags only, so analytics_storage stays denied.
// If GA4 is added later, add an Analytics choice to the banner and grant it here.
const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "denied",
} as const;

/* ---------- cookie ---------- */

function writeCookie(value: "accepted" | "rejected") {
  const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

export function getConsent(): ConsentState {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`)
  );
  const value = match?.[1];
  return value === "accepted" || value === "rejected" ? value : "unknown";
}

export function getServerConsent(): ConsentState {
  return "pending";
}

// Removes the Google Ads cookies (_gcl_au, _gcl_aw, ...) when consent is withdrawn.
function clearGoogleAdsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name.startsWith("_gcl_"));

  const parts = window.location.hostname.split(".");
  const domains = parts
    .map((_, i) => parts.slice(i).join("."))
    .filter((d) => d.includes("."));

  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${domain}`;
    }
  }
}

/* ---------- tiny store so React can subscribe to the cookie ---------- */

const listeners = new Set<() => void>();

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notify() {
  listeners.forEach((listener) => listener());
}

/* ---------- GTM ---------- */

function loadGtm() {
  if (document.getElementById(GTM_SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

/* ---------- public actions ---------- */

let initialised = false;

// Call once on page load. Sets the denied default, then restores a saved "accepted".
export function initConsent() {
  if (initialised) return;
  initialised = true;

  gtag("consent", "default", DENIED);

  if (getConsent() === "accepted") {
    gtag("consent", "update", GRANTED);
    loadGtm();
  }
}

export function acceptConsent() {
  writeCookie("accepted");
  gtag("consent", "update", GRANTED);
  loadGtm();
  notify();
}

export function rejectConsent() {
  writeCookie("rejected");

  // GTM cannot be unloaded. If it is already running (the visitor is
  // withdrawing an earlier acceptance), signal denied, clean up and reload
  // so the page comes back without GTM.
  if (document.getElementById(GTM_SCRIPT_ID)) {
    gtag("consent", "update", DENIED);
    clearGoogleAdsCookies();
    window.location.reload();
    return;
  }

  notify();
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
