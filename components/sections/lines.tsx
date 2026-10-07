import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { SectionIndex } from "@/components/ui/section-index";

export function Lines() {
  return (
    <Section id={site.lines.id} labelledBy="lineas-title">
      <SectionIndex
        index={site.lines.index}
        title={site.lines.title}
        id="lineas-title"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {site.lines.items.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="group relative flex min-h-[28rem] flex-col border border-line p-8 md:p-12 lg:p-16"
          >
            <span
              className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full motion-reduce:transition-none"
              aria-hidden="true"
            />
            <p className="font-condensed text-sm tracking-[0.24em] text-mute">
              {item.index}
            </p>
            <h3 className="mt-10 font-display text-4xl leading-[0.95] tracking-[0.04em] text-ink md:text-5xl">
              {item.title}
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mute md:text-base">
              {item.description}
            </p>
            <ul className="mt-auto flex list-none flex-col gap-3 p-0 pt-12">
              {item.includes.map((include) => (
                <li key={include} className="flex items-start gap-3 text-sm text-ink">
                  <span
                    className="mt-[0.7em] h-px w-3 shrink-0 bg-line"
                    aria-hidden="true"
                  />
                  {include}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
