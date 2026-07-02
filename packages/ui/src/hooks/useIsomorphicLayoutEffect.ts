/**
 * Ascend Enterprise UI
 * --------------------
 * useIsomorphicLayoutEffect
 *
 * Uses `useLayoutEffect` in the browser and `useEffect`
 * during server-side rendering.
 *
 * This avoids React SSR warnings while still allowing
 * synchronous DOM updates after hydration.
 *
 * Used by:
 * - Dialog
 * - Popover
 * - Tooltip
 * - Dropdown
 * - Focus management
 * - Measurements
 * - Animations
 */

import {
  useEffect,
  useLayoutEffect,
} from "react";

/**
 * React warns when useLayoutEffect is used during SSR.
 *
 * This hook automatically selects the correct implementation.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined"
    ? useLayoutEffect
    : useEffect;

export default useIsomorphicLayoutEffect;
