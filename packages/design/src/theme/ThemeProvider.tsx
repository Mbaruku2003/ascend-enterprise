"use client";

/**
 * Ascend Enterprise
 * Theme Provider
 *
 * Wires ThemeReducer (state transitions), ThemeManager (persistence +
 * DOM application), and ThemeStorage (localStorage access) together
 * behind the ThemeContext consumed by useThemeContext().
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { ThemeContext, type ThemeContextValue } from "./ThemeContext";
import { themeReducer } from "./ThemeReducer";
import { ThemeActionTypes } from "./actions";
import { ThemeManager } from "./ThemeManager";
import { ThemeStorage } from "./ThemeStorage";
import { DEFAULT_THEME } from "./defaults";
import { resolveTheme } from "./utils";
import type { AccentColor, ThemeMode, ThemeState } from "./types";
import type { ThemeStorageAdapter } from "./storage/ThemeStorageAdapter";

// ThemeStorage exposes static methods; ThemeManager expects an instance
// implementing ThemeStorageAdapter. This stateless wrapper bridges the
// two without changing either file. It's fine to keep at module scope
// since it holds no state itself — only ThemeManager is injected.
// `satisfies` (rather than a `: ThemeStorageAdapter` annotation) keeps
// this literal's inferred types intact while still failing to compile
// if it ever drifts from the interface — e.g. a missing method, or a
// signature that no longer matches.
const themeStorageAdapter = {
  load: () => ThemeStorage.load(),
  save: (theme: ThemeState) => ThemeStorage.save(theme),
  reset: () => ThemeStorage.reset(),
} satisfies ThemeStorageAdapter;

export interface ThemeProviderProps {
  children: ReactNode;
  /**
   * Injected so tests (or alternate storage backends) can supply their
   * own ThemeManager. Defaults to one backed by localStorage.
   */
  themeManager?: ThemeManager;
  /** Used for the very first render, before manager.initialize() runs. */
  defaultTheme?: ThemeState;
}

export function ThemeProvider({
  children,
  themeManager,
  defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) {
  // Created once per provider instance rather than as a module-level
  // singleton — callers can inject their own via the themeManager prop.
  const [manager] = useState(
    () => themeManager ?? new ThemeManager(themeStorageAdapter),
  );

  // Lazy reducer initializer: reads + applies the persisted theme once,
  // up front, so there's no "render with defaults, correct a moment
  // later" hydration effect. This is safe from React hydration
  // mismatches because ThemeManager.apply() mutates document.documentElement
  // directly — it's outside the JSX tree, so it can't desync from what
  // the server rendered.
  //
  // ThemeManager itself now catches storage/DOM errors internally, so
  // initialize() shouldn't throw — but a caller-injected themeManager
  // isn't guaranteed to be that defensive, and this initializer runs
  // synchronously during render, where an uncaught throw would take
  // down the whole tree. The try/catch is cheap insurance against that.
  const [theme, dispatch] = useReducer(themeReducer, defaultTheme, () => {
    try {
      return manager.initialize();
    } catch (error) {
      console.warn(
        "[ThemeProvider] Failed to initialize theme, falling back to defaults.",
        error,
      );
      return defaultTheme;
    }
  });

  // Bumped whenever the OS scheme changes while mode === "system", so
  // resolvedTheme has a reason to recompute even though theme.mode
  // itself never changes in that case.
  const [systemThemeVersion, setSystemThemeVersion] = useState(0);

  const resolvedTheme = useMemo(
    () => resolveTheme(theme.mode),
    [theme.mode, systemThemeVersion],
  );

  // Persist + apply to <html> whenever the theme changes.
  useEffect(() => {
    manager.update(theme);
  }, [manager, theme]);

  // Ref so the system-preference listener always applies the latest
  // theme, even though the effect below intentionally depends on just
  // theme.mode rather than the whole theme object.
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    if (theme.mode !== "system") return;

    return manager.subscribeToSystemTheme(() => {
      manager.apply(themeRef.current);
      setSystemThemeVersion((v) => v + 1);
    });
  }, [manager, theme.mode]);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    dispatch({ type: ThemeActionTypes.SET_MODE, payload: mode });
  }, []);

  const setAccent = useCallback((accent: AccentColor) => {
    dispatch({ type: ThemeActionTypes.SET_ACCENT, payload: accent });
  }, []);

  const updateAccessibility = useCallback(
    (preferences: Partial<ThemeState["accessibility"]>) => {
      dispatch({
        type: ThemeActionTypes.UPDATE_ACCESSIBILITY,
        payload: preferences,
      });
    },
    [],
  );

  const resetTheme = useCallback(() => {
    const reset = manager.reset();
    dispatch({ type: ThemeActionTypes.HYDRATE, payload: reset });
  }, [manager]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setThemeMode,
      setAccent,
      updateAccessibility,
      resetTheme,
    }),
    [theme, resolvedTheme, setThemeMode, setAccent, updateAccessibility, resetTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
