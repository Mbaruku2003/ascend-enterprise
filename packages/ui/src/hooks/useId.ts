/**
 * Ascend Enterprise UI
 * --------------------
 * useId
 *
 * Returns a stable, SSR-safe ID.
 *
 * If an explicit ID is provided, it is returned unchanged.
 * Otherwise, React's built-in useId() is used.
 *
 * This hook is intended for accessibility attributes such as:
 *
 * - htmlFor
 * - aria-labelledby
 * - aria-describedby
 * - aria-controls
 * - aria-owns
 * - aria-activedescendant
 */

import { useId as useReactId } from "react";

/**
 * Returns a stable ID.
 *
 * @param id Optional externally-controlled ID.
 */
export function useId(id?: string): string {
  const generatedId = useReactId();

  return id ?? generatedId;
}

export default useId;
