/**
 * Utility helpers for XpressDM
 */

/** Merge class names (simple version without clsx dependency) */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a price number for display */
export function formatPrice(price: number, currency = "$"): string {
  if (price === 0) return "Free";
  return `${currency}${price.toLocaleString()}`;
}

/** Truncate a string to a given length */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + "…";
}
