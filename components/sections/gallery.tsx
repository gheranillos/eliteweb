import { site } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionIndex } from "@/components/ui/section-index";

export function Gallery() {
  const [lead, second, third, ...rest] = site.gallery.items;

  return (
    <Section id={site.gallery.id} labelledBy="eventos-title">
      <SectionIndex
        index={site.gallery.index}
        title={site.gallery.title}
        id="eventos-title"
      />
      <p className="mb-12 max-w-md text-base leading-relaxed text-mute md:mb-16">
        {site.gallery.intro}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7 md:row-span-2">
          <ImagePlaceholder
            title={lead.title}
            place={lead.place}
            className="min-h-[26rem] transition-colors duration-300 hover:border-ink md:min-h-[38rem]"
          />
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-5">
          <ImagePlaceholder
            title={second.title}
            place={second.place}
            className="min-h-72 transition-colors duration-300 hover:border-ink md:min-h-[18.5rem]"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5">
          <ImagePlaceholder
            title={third.title}
            place={third.place}
            className="min-h-72 transition-colors duration-300 hover:border-ink md:min-h-[18.5rem]"
          />
        </Reveal>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {rest.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <ImagePlaceholder
              title={item.title}
              place={item.place}
              className="min-h-80 transition-colors duration-300 hover:border-ink"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
