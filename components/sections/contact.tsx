import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { SectionIndex } from "@/components/ui/section-index";
import { ContactForm } from "@/components/sections/contact-form";

function whatsappHref() {
  const digits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  if (digits.length < 8) {
    return null;
  }

  const text = encodeURIComponent(site.contact.whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function Contact() {
  const href = whatsappHref();

  return (
    <Section id={site.contact.id} labelledBy="contacto-title">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionIndex
            index={site.contact.index}
            title={site.contact.title}
            id="contacto-title"
          />
          <p className="max-w-sm text-base leading-relaxed text-mute">
            {site.contact.intro}
          </p>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-12 items-center border border-line px-5 font-condensed text-sm tracking-[0.16em] text-ink transition-colors duration-300 hover:border-accent"
            >
              {site.contact.whatsappLabel}
            </a>
          ) : null}
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
