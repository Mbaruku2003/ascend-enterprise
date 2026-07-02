/**
 * Ascend Enterprise UI
 * --------------------
 * Class Name Utility
 *
 * A lightweight alternative to `classnames` / `clsx`.
 *
 * Features:
 * - Supports strings
 * - Supports numbers
 * - Supports nested arrays
 * - Supports object syntax
 * - Ignores falsy values
 * - Deduplicates class names
 * - Tree-shakeable
 * - Zero dependencies
 */

export type ClassDictionary = Record<string, boolean | null | undefined>;

export type ClassArray = ClassValue[];

export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassArray;

/**
 * Recursively flattens class values into a Set.
 */
function appendClasses(
  value: ClassValue,
  classes: Set<string>,
): void {
  if (!value) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    const tokens = String(value)
      .trim()
      .split(/\s+/);

    for (const token of tokens) {
      if (token) {
        classes.add(token);
      }
    }

    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      appendClasses(item, classes);
    }

    return;
  }

  if (typeof value === "object") {
    for (const [key, enabled] of Object.entries(value)) {
      if (enabled) {
        classes.add(key);
      }
    }
  }
}

/**
 * Combines CSS class names.
 *
 * @example
 * ```ts
 * cn(
 *   "button",
 *   isActive && "button--active",
 *   ["rounded", "shadow"],
 *   {
 *     disabled: isDisabled,
 *     loading: isLoading,
 *   },
 * );
 * ```
 *
 * Result:
 *
 * "button button--active rounded shadow loading"
 */
export function cn(
  ...values: ClassValue[]
): string {
  const classes = new Set<string>();

  for (const value of values) {
    appendClasses(value, classes);
  }

  return [...classes].join(" ");
}

export default cn;
