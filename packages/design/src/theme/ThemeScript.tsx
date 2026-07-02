"use client";

/**
 * Ascend Enterprise
 * Theme Script
 *
 * Prevents a flash of the wrong theme (FOUC) before React hydrates.
 *
 * Usage (Next.js App Router):
 *
 * <html>
 *   <head>
 *     <ThemeScript />
 *   </head>
 *   <body>...</body>
 * </html>
 */

import Script from "next/script";

const script = `
(() => {
  try {
    const STORAGE_KEY = "ascend-theme";

    const DEFAULT_THEME = {
      mode: "system",
      accent: "indigo",
      accessibility: {
        reducedMotion: false,
        highContrast: false
      }
    };

    const stored = localStorage.getItem(STORAGE_KEY);

    const theme = stored
      ? JSON.parse(stored)
      : DEFAULT_THEME;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const resolved =
      theme.mode === "system"
        ? (prefersDark ? "dark" : "light")
        : theme.mode;

    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    if (theme.accent) {
      root.dataset.accent = theme.accent;
    }

    root.toggleAttribute(
      "data-reduced-motion",
      !!theme.accessibility?.reducedMotion
    );

    root.toggleAttribute(
      "data-high-contrast",
      !!theme.accessibility?.highContrast
    );
  } catch {
    // Never block page rendering because of theme initialization.
  }
})();
`;

export function ThemeScript() {
  return (
    <Script
      id="ascend-theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: script,
      }}
    />
  );
}

export default ThemeScript;
