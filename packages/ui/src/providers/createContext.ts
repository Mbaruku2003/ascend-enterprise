/**
 * Ascend Enterprise UI
 * --------------------
 * createContext
 *
 * A small helper for creating strongly typed React contexts.
 *
 * Features:
 * - No undefined checks in consuming components
 * - Helpful developer error messages
 * - React DevTools display names
 * - Fully generic
 *
 * Example:
 *
 * const [ThemeProvider, useTheme] = createContext<ThemeContextValue>({
 *   name: "Theme",
 * });
 */

import {
  createContext as createReactContext,
  useContext,
  type Provider,
  type ReactNode,
} from "react";

export interface CreateContextOptions {
  /**
   * Human-readable context name.
   *
   * Used for:
   * - React DevTools
   * - Error messages
   */
  name: string;

  /**
   * Optional custom error message.
   */
  errorMessage?: string;
}

/**
 * Creates a strongly typed React Context with a matching hook.
 */
export function createContext<T>({
  name,
  errorMessage,
}: CreateContextOptions): readonly [
  Provider<T | undefined>,
  () => T,
] {
  const Context = createReactContext<T | undefined>(undefined);

  Context.displayName = `${name}Context`;

  function useSafeContext(): T {
    const value = useContext(Context);

    if (value === undefined) {
      throw new Error(
        errorMessage ??
          `${name} components must be rendered inside <${name}Provider>.`,
      );
    }

    return value;
  }

  return [
    Context.Provider,
    useSafeContext,
  ] as const;
}

export default createContext;
