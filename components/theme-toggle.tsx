"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "./icons";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-surface-2"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle color theme"
      }
      aria-pressed={mounted ? isDark : undefined}
    >
      {mounted ? (
        isDark ? (
          <IconSun aria-hidden="true" />
        ) : (
          <IconMoon aria-hidden="true" />
        )
      ) : (
        <span className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
