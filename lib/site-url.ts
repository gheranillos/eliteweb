export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

  if (raw) {
    try {
      return new URL(raw).origin;
    } catch {
      return "http://localhost:3000";
    }
  }

  return "http://localhost:3000";
}
