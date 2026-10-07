export function getSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const raw = candidate?.trim().replace(/\/$/, "");
    if (!raw) continue;

    try {
      const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
      return new URL(withProtocol).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}
