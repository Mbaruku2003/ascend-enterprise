/**
 * Ascend Enterprise UI
 * --------------------
 * useMounted
 *
 * Indicates whether a component has mounted.
 *
 * Useful for:
 * - SSR-safe rendering
 * - Portals
 * - Animations
 * - Browser-only APIs
 * - Delaying DOM-dependent logic until after hydration
 */

import { useEffect, useState } from "react";

/**
 * Returns `true` after the component has mounted.
 *
 * During server-side rendering and the initial client render,
 * this hook returns `false`.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted;
}

export default useMounted;
