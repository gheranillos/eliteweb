import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Lines } from "@/components/sections/lines";
import { Manifesto } from "@/components/sections/manifesto";
import { Navbar } from "@/components/sections/navbar";
import { Process } from "@/components/sections/process";
import { logoSrc } from "@/components/ui/logo";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function Home() {
  const url = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url,
    logo: `${url}${logoSrc}`,
    image: `${url}${logoSrc}`,
    sameAs: [site.instagram.href],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Manifesto />
        <Lines />
        <Capabilities />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
