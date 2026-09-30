"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add("theme-ready");
    return () => document.body.classList.remove("theme-ready");
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
