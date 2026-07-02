"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * UI Provider
 *
 * The root provider for the Ascend UI package.
 *
 * Responsibilities:
 * - Merge default configuration with user overrides
 * - Apply document-level attributes (lang, dir)
 * - Provide resolved configuration via context
 * - Serve as the foundation for all UI components
 */

import {
  useEffect,
  useMemo,
} from "react";

import { UIContextProvider } from "./UIContext";
import { DEFAULT_UI_CONFIG } from "./defaults";

import type {
  UIConfig,
  UIContextValue,
  UIProviderProps,
} from "./UIProvider.types";

export function UIProvider({
  children,
  config,
}: UIProviderProps) {
  /**
   * Merge user configuration with defaults.
   */
  const resolvedConfig = useMemo<UIConfig>(
    () => ({
      ...DEFAULT_UI_CONFIG,
      ...config,
    }),
    [config],
  );

  /**
   * Keep the document language and direction in sync.
   *
   * Safe because effects only execute on the client.
   */
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;

    root.lang = resolvedConfig.locale;
    root.dir = resolvedConfig.direction;
  }, [
    resolvedConfig.locale,
    resolvedConfig.direction,
  ]);

  /**
   * Memoize context value to avoid unnecessary rerenders.
   */
  const contextValue = useMemo<UIContextValue>(
    () => ({
      config: resolvedConfig,
    }),
    [resolvedConfig],
  );

  return (
    <UIContextProvider value={contextValue}>
      {children}
    </UIContextProvider>
  );
}

export default UIProvider;
