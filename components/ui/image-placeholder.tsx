type ImagePlaceholderProps = {
  title: string;
  place: string;
  className?: string;
  label?: string;
};

/** Black plate with a fine border. Replace the empty field with a real photograph. */
export function ImagePlaceholder({
  title,
  place,
  className = "",
  label = "Fotografía",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between border border-line bg-black p-5 md:p-6 ${className}`}
    >
      <span className="font-condensed text-xs tracking-[0.24em] text-mute">
        {label}
      </span>
      <div>
        <h3 className="font-display text-[1.75rem] leading-none tracking-[0.06em] text-ink md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm text-mute">{place}</p>
      </div>
    </div>
  );
}
