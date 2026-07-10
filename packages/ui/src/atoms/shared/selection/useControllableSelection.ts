/**
 * ============================================================================
 * Ascend UI
 * useControllableSelection
 * ============================================================================
 */

import {
  useCallback,
  useState,
} from "react";

import {
  normalizeSelection,
  toggleSelection,
} from "./selection.utils";

export interface UseControllableSelectionProps<T> {
  value?: readonly T[];

  defaultValue?: readonly T[];

  onValueChange?(
    value: T[],
  ): void;
}

export function useControllableSelection<T>({
  value,

  defaultValue,

  onValueChange,

}: UseControllableSelectionProps<T>) {
  const [
    internalValue,

    setInternalValue,

  ] = useState<T[]>(
    normalizeSelection(defaultValue),
  );

  const currentValue =
    value === undefined
      ? internalValue
      : normalizeSelection(value);

  const setValue =
    useCallback(
      (
        next: T[],
      ) => {
        if (value === undefined) {
          setInternalValue(next);
        }

        onValueChange?.(next);
      },
      [
        value,
        onValueChange,
      ],
    );

  const toggle =
    useCallback(
      (
        item: T,
      ) => {
        setValue(
          toggleSelection(
            currentValue,
            item,
          ),
        );
      },
      [
        currentValue,
        setValue,
      ],
    );

  const clear =
    useCallback(
      () => {
        setValue([]);
      },
      [setValue],
    );

  return {
    value: currentValue,

    setValue,

    toggle,

    clear,

    isControlled:
      value !== undefined,
  };
}
