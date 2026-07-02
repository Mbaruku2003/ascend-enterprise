/**
 * Ascend Enterprise UI
 * --------------------
 * useControlled
 *
 * Determines whether a component is operating in controlled or
 * uncontrolled mode.
 *
 * This hook does not manage state. Instead, it exposes metadata used
 * by useControllableState() and other components.
 *
 * Features:
 * - Detects controlled vs. uncontrolled usage
 * - Warns if the mode changes after the first render
 * - Warns if both `value` and `defaultValue` are provided
 * - Development-only warnings
 */

import { useEffect, useRef } from "react";

export interface UseControlledOptions<T> {
  /**
   * Controlled value.
   */
  value?: T;

  /**
   * Initial uncontrolled value.
   */
  defaultValue?: T;

  /**
   * Component name used in warning messages.
   */
  componentName?: string;
}

export interface UseControlledResult {
  /**
   * True when the component is controlled.
   */
  isControlled: boolean;
}

/**
 * Determines whether a component is controlled.
 */
export function useControlled<T>({
  value,
  defaultValue,
  componentName = "Component",
}: UseControlledOptions<T>): UseControlledResult {
  const isControlled = value !== undefined;

  // The initial mode must never change.
  const initialMode = useRef(isControlled);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (initialMode.current !== isControlled) {
      console.warn(
        `[${componentName}] changed from ${
          initialMode.current ? "controlled" : "uncontrolled"
        } to ${
          isControlled ? "controlled" : "uncontrolled"
        }. Components should not switch modes after mounting.`,
      );
    }
  }, [componentName, isControlled]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    if (value !== undefined && defaultValue !== undefined) {
      console.warn(
        `[${componentName}] received both "value" and "defaultValue". ` +
          `Choose either controlled or uncontrolled mode.`,
      );
    }
  }, [componentName, value, defaultValue]);

  return {
    isControlled,
  };
}

export default useControlled;
