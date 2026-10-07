import Image from "next/image";

type LogoProps = {
  /** Render size in pixels. Omit it to size the mark with the `--mark` variable. */
  size?: number;
  priority?: boolean;
  alt?: string;
  className?: string;
};

/**
 * Chrome symbol. Keep a clear space of 0.5× its width.
 * Do not recolor, rotate, distort, or shadow the file.
 */
export function Logo({
  size,
  priority = false,
  alt = "",
  className = "",
}: LogoProps) {
  const sized = typeof size === "number";

  return (
    <span
      className={
        sized
          ? `inline-flex shrink-0 ${className}`
          : `inline-flex shrink-0 p-[calc(var(--mark)*0.5)] [--mark:7.25rem] sm:[--mark:8.75rem] lg:[--mark:11.5rem] ${className}`
      }
      style={sized ? { padding: size / 2 } : undefined}
    >
      <Image
        src="/logo.png"
        alt={alt}
        width={1254}
        height={1254}
        priority={priority}
        sizes={sized ? `${size}px` : "(min-width: 1024px) 184px, 140px"}
        style={
          sized
            ? { width: size, height: size }
            : { width: "var(--mark)", height: "var(--mark)" }
        }
      />
    </span>
  );
}
