/**
 * Ascend Enterprise UI
 * --------------------
 * UI Context
 *
 * Provides access to the resolved UI configuration throughout the
 * component tree.
 *
 * This module intentionally contains no business logic. It only
 * defines the context and exports the corresponding hook.
 */

import { createContext } from "./createContext";
import type { UIContextValue } from "./UIProvider.types";

/**
 * Internal context provider and public hook.
 *
 * Components should consume UI configuration through useUIContext().
 */
export const [
  UIContextProvider,
  useUIContext,
] = createContext<UIContextValue>({
  name: "UI",
});

export default useUIContext;
