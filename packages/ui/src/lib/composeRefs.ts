/**
 * Ascend Enterprise UI
 * --------------------
 * composeRefs
 *
 * Combines multiple React refs into a single callback ref.
 *
 * Supports:
 * - callback refs
 * - mutable refs
 * - forwarded refs
 * - unlimited refs
 *
 * Example:
 *
 * const ref = composeRefs(
 *   forwardedRef,
 *   internalRef,
 *   analyticsRef,
 * );
 *
 * <button ref={ref} />
 */

import type {
  MutableRefObject,
  Ref,
  RefCallback,
} from "react";

/**
 * Assigns a value to a React ref.
 */
function assignRef<T>(
  ref: Ref<T> | undefined | null,
  value: T | null,
): void {
  if (ref == null) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  (
    ref as MutableRefObject<T | null>
  ).current = value;
}

/**
 * Combines multiple refs into one callback ref.
 */
export function composeRefs<T>(
  ...refs: Array<Ref<T> | null | undefined>
): RefCallback<T> {
  return (node: T | null) => {
    for (const ref of refs) {
      assignRef(ref, node);
    }
  };
}

export default composeRefs;
