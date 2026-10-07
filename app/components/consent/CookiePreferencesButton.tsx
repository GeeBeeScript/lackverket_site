"use client";

import { openCookiePreferences } from "./consent";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

// Put this in the footer so visitors can change their choice at any time.
export default function CookiePreferencesButton({
  className,
  children = "cookieinställningar",
}: Props) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {children}
    </button>
  );
}
