/**
 * Ascend Enterprise UI
 * --------------------
 * usePrevious
 *
 * Returns the previous value from the last completed render.
 *
 * Unlike storing previous values in state, this hook does not
 * trigger additional renders.
 *
 * Useful for:
 * - Animations
 * - Detecting prop changes
 * - Form state comparisons
 * - Transition components
 * - Optimistic UI
 */

import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * Returns the previous value.
 *
 * On the first render this returns undefined.
 */
export function usePrevious<T>(
  value: T,
): T | undefined {
  const previousRef = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
}

export default usePrevious;
