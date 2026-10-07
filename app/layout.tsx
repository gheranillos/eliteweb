import type { Metadata, Viewport } from "next";
import { Anton, Bebas_Neue, Manrope } from "next/font/google";
import { logoSrc } from "@/components/ui/logo";
import { MotionProvider } from "@/components/ui/motion-provider";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Élite Prod — Experiencias de nivel internacional",
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: site.name,
    title: "Élite Prod",
    description: site.description,
    images: [
      {
        url: logoSrc,
        width: 1254,
        height: 1254,
        alt: "Símbolo Élite Prod",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Élite Prod",
    description: site.description,
    images: [logoSrc],
  },
  icons: {
    icon: [{ url: logoSrc, type: "image/png" }],
    apple: [{ url: logoSrc }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${bebas.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full overflow-x-clip bg-canvas font-sans text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-canvas focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Saltar al contenido
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
