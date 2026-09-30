"use client";

import { useEffect, useId, useRef } from "react";
import { IconClose } from "./icons";

type NavItem = { label: string; href: string };

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeHref: string;
  resumeHref: string;
};

export function MobileMenu({
  open,
  onClose,
  items,
  activeHref,
  resumeHref,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusables = dialog?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusables?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      ref={dialogRef}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(34,29,24,0.35)]"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        className="absolute top-[4.5rem] right-[4vw] left-[4vw] border border-border bg-surface p-5 shadow-[var(--shadow-md)]"
        style={{ borderRadius: "var(--radius-card)" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p id={titleId} className="text-sm font-semibold text-text">
            Menu
          </p>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text hover:bg-surface-2"
            onClick={onClose}
            aria-label="Close menu"
          >
            <IconClose aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`block rounded-[var(--radius-inner)] px-4 py-3 text-base transition-colors ${
                    activeHref === item.href
                      ? "bg-surface-2 text-[var(--accent-text)]"
                      : "text-text hover:bg-surface-2"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={resumeHref}
          className="btn btn-secondary mt-5 w-full"
          onClick={onClose}
          download
        >
          Resume
        </a>
      </div>
    </div>
  );
}
