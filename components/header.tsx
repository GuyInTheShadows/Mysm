"use client";

import { useEffect, useState } from "react";
import type { Resume } from "@/content/resume";
import { IconMenu } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

type HeaderProps = {
  identity: Resume["identity"];
  nav: Resume["nav"];
};

export function Header({ identity, nav }: HeaderProps) {
  const [activeHref, setActiveHref] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );
        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <>
      <header className="site-header no-print fixed top-3 left-1/2 z-40 flex h-14 w-[min(92vw,760px)] -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-border px-3 shadow-[var(--shadow-sm)] md:px-4">
        <div
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--surface) 80%, transparent)",
            backdropFilter: "blur(14px) saturate(1.2)",
            WebkitBackdropFilter: "blur(14px) saturate(1.2)",
          }}
          aria-hidden="true"
        />

        <a
          href="#top"
          className="shrink-0 rounded-full px-3 py-2 text-[15px] font-semibold text-text transition-colors hover:text-[var(--accent-text)]"
        >
          <span className="sm:hidden">{identity.shortName}</span>
          <span className="hidden sm:inline">{identity.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-[background-color,color] duration-[250ms] ${
                activeHref === item.href
                  ? "bg-surface-2 text-text"
                  : "text-muted hover:text-text"
              }`}
              style={{ transitionTimingFunction: "var(--ease-soft)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={identity.resumeFile}
            className="hidden h-10 items-center justify-center rounded-full bg-text px-4 text-sm font-semibold text-bg transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-px hover:shadow-[var(--shadow-md)] md:inline-flex"
            style={{ transitionTimingFunction: "var(--ease-soft)" }}
            download
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text hover:bg-surface-2 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <IconMenu aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={nav}
        activeHref={activeHref}
        resumeHref={identity.resumeFile}
      />
    </>
  );
}
