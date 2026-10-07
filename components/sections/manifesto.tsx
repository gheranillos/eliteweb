import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Manifesto() {
  return (
    <Section id={site.manifesto.id} labelledBy="manifiesto-title">
      <h2
        id="manifiesto-title"
        className="font-display text-[clamp(1.55rem,5.6vw,5.5rem)] leading-[0.92] tracking-[0.02em] text-ink"
      >
        {site.manifesto.lines.map((line, index) => (
          <Reveal
            key={line}
            as="span"
            delay={index * 0.05}
            className="block w-fit max-w-full"
          >
            {line}
          </Reveal>
        ))}
      </h2>
      <Reveal delay={0.15}>
        <p className="mt-12 max-w-md text-base leading-relaxed text-mute md:mt-16 md:text-lg">
          {site.manifesto.support}
        </p>
      </Reveal>
    </Section>
  );
}
