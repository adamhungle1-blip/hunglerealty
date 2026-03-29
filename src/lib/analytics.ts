/**
 * Analytics event helpers — thin wrappers around gtag().
 * Safe to call even if GA4 isn't loaded (no-ops gracefully).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/** Track a contact form submission */
export function trackFormSubmission(source: string) {
  trackEvent("form_submission", {
    event_category: "contact",
    event_label: source,
  });
}

/** Track a phone click-to-call */
export function trackPhoneCall(href?: string) {
  trackEvent("phone_call", {
    event_category: "contact",
    event_label: href ?? "tel:3065318854",
  });
}
