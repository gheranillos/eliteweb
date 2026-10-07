import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-t border-line px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 ${className}`}
    >
      <div className="mx-auto w-full max-w-[90rem]">{children}</div>
    </section>
  );
}
