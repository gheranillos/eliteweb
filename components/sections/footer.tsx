import { site } from "@/content/site";
import { Copyright } from "@/components/ui/copyright";
import { Logo } from "@/components/ui/logo";
import { Wordmark } from "@/components/ui/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <a href="#inicio" className="inline-flex flex-wrap items-center">
          <Logo size={28} alt="" />
          <Wordmark className="text-2xl" />
        </a>
        <a
          href={site.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-mute transition-colors duration-300 hover:text-ink"
        >
          {site.instagram.label}
        </a>
        <Copyright />
      </div>
    </footer>
  );
}
