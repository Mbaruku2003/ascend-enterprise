/**
 * Ascend Enterprise UI
 * --------------------
 * useLatest
 *
 * Returns a mutable ref that always points to the latest value without
 * causing re-renders.
 *
 * This is useful for avoiding stale closures in callbacks, timers,
 * subscriptions, and event listeners.
 *
 * Example:
 *
 * const latestUser = useLatest(user);
 *
 * useEffect(() => {
 *   const id = setInterval(() => {
 *     console.log(latestUser.current);
 *   }, 1000);
 *
 *   return () => clearInterval(id);
 * }, []);
 */

import { useRef } from "react";

export function useLatest<T>(value: T) {
  const ref = useRef(value);

  // Keep the ref synchronized with the latest value.
  // Updating a ref does not trigger a re-render.
  ref.current = value;

  return ref;
}

export default useLatest;
