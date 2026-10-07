export function SectionIndex({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <p className="font-condensed text-sm tracking-[0.28em] text-mute">{index}</p>
      <h2
        id={id}
        className="mt-4 font-display text-4xl leading-none tracking-[0.06em] text-ink md:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}
