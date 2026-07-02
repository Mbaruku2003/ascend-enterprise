/**
 * Ascend Enterprise UI
 * --------------------
 * useControllableState
 *
 * A reusable hook for components that support both controlled and
 * uncontrolled usage.
 *
 * Features:
 * - Controlled & uncontrolled modes
 * - Functional state updates
 * - Stable change callbacks
 * - No duplicate updates
 * - Generic over any value type
 */

import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { useControlled } from "./useControlled";
import { useEvent } from "./useEvent";

export interface UseControllableStateOptions<T> {
  /**
   * Controlled value.
   */
  value?: T;

  /**
   * Initial uncontrolled value.
   */
  defaultValue: T;

  /**
   * Called whenever the value changes.
   */
  onChange?: (value: T) => void;

  /**
   * Component name used in development warnings.
   */
  componentName?: string;
}

export interface UseControllableStateResult<T> {
  /**
   * Current value.
   */
  value: T;

  /**
   * React-like state setter.
   */
  setValue: Dispatch<SetStateAction<T>>;

  /**
   * True when operating in controlled mode.
   */
  isControlled: boolean;
}

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
  componentName,
}: UseControllableStateOptions<T>): UseControllableStateResult<T> {
  const { isControlled } = useControlled({
    value,
    defaultValue,
    componentName,
  });

  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleChange = useEvent((next: T) => {
    onChange?.(next);
  });

  const currentValue = isControlled
    ? (value as T)
    : internalValue;

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (next) => {
      const nextValue =
        typeof next === "function"
          ? (next as (previous: T) => T)(currentValue)
          : next;

      // Prevent duplicate updates.
      if (Object.is(currentValue, nextValue)) {
        return;
      }

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      handleChange(nextValue);
    },
    [
      currentValue,
      handleChange,
      isControlled,
    ],
  );

  return {
    value: currentValue,
    setValue,
    isControlled,
  };
}

export default useControllableState;
