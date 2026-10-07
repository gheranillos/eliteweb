"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open || scrolled
          ? "border-b border-line bg-canvas/70 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-[90rem] items-center justify-between gap-4 px-3 md:min-h-20 md:px-6 lg:px-10">
        <a href="#inicio" className="inline-flex items-center" onClick={close}>
          <Logo size={22} alt="" />
          <span className="sr-only">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Secciones">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-condensed text-sm tracking-[0.18em] text-mute transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 pr-3 md:pr-4">
          <a
            href="#contacto"
            onClick={close}
            className="inline-flex min-h-11 items-center border border-line px-4 font-condensed text-sm tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent"
          >
            Cotizar
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center px-2 font-condensed text-sm tracking-[0.18em] text-ink md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Secciones"
          className="border-t border-line bg-canvas px-6 py-8 md:hidden"
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center font-display text-3xl tracking-[0.08em] text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
