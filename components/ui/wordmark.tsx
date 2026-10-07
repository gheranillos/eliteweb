type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-block font-display uppercase leading-none tracking-[0.16em] text-ink pr-[0.16em] sm:tracking-[0.28em] sm:pr-[0.28em] ${className}`}
    >
      Élite <span className="text-mute">Prod</span>
    </span>
  );
}
