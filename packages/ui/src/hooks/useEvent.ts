/**
 * Ascend Enterprise UI
 * --------------------
 * useEvent
 *
 * Returns a stable callback reference that always invokes the latest
 * version of the provided callback.
 *
 * Unlike useCallback(), the returned function identity never changes,
 * eliminating stale closures without requiring dependency arrays.
 *
 * Useful for:
 * - Event listeners
 * - Timers
 * - Resize observers
 * - Keyboard handlers
 * - Subscriptions
 * - Dialogs
 * - Popovers
 */

import {
  useCallback,
  useRef,
  type MutableRefObject,
} from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useLatest } from "./useLatest";

/**
 * A generic function type.
 */
type AnyFunction = (...args: never[]) => unknown;

/**
 * Returns a callback with a stable identity that always invokes the
 * latest callback implementation.
 */
export function useEvent<T extends AnyFunction>(callback: T): T {
  const latestCallback = useLatest(callback);

  const stableCallback = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    stableCallback.current = ((...args: Parameters<T>) => {
      return latestCallback.current(...args);
    }) as T;
  }, [latestCallback]);

  if (!stableCallback.current) {
    stableCallback.current = ((...args: Parameters<T>) => {
      return latestCallback.current(...args);
    }) as T;
  }

  return useCallback(
    ((...args: Parameters<T>) => {
      return (stableCallback as MutableRefObject<T>).current(...args);
    }) as T,
    [],
  );
}

export default useEvent;
