import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionIndex } from "@/components/ui/section-index";

export function Capabilities() {
  return (
    <Section id={site.capabilities.id} labelledBy="capacidades-title">
      <SectionIndex
        index={site.capabilities.index}
        title={site.capabilities.title}
        id="capacidades-title"
      />
      <p className="mb-12 max-w-md text-base leading-relaxed text-mute md:mb-16">
        {site.capabilities.intro}
      </p>
      <ol className="grid list-none grid-cols-1 gap-x-10 gap-y-12 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {site.capabilities.items.map((item, index) => (
          <Reveal
            key={item.title}
            as="li"
            delay={(index % 3) * 0.06}
            className="border-t border-line pt-6"
          >
            <span className="font-condensed text-sm tracking-[0.22em] text-mute">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl leading-none tracking-[0.05em] text-ink md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
              {item.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
