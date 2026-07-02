/**
 * Ascend Enterprise UI
 * --------------------
 * mergeProps
 *
 * Safely merges multiple React props objects.
 *
 * Features
 * --------
 * ✓ className merging
 * ✓ style merging
 * ✓ event handler composition
 * ✓ ref composition
 * ✓ generic typing
 * ✓ zero dependencies
 */

import type {
  CSSProperties,
  MutableRefObject,
  Ref,
  RefCallback,
} from "react";

import { cn } from "./cn";
import { composeRefs } from "./composeRefs";

type EventHandler = (...args: any[]) => void;

type Props = Record<string, any>;

function isEventHandler(key: string): boolean {
  return /^on[A-Z]/.test(key);
}

function composeEventHandlers(
  first?: EventHandler,
  second?: EventHandler,
): EventHandler | undefined {
  if (!first) {
    return second;
  }

  if (!second) {
    return first;
  }

  return (...args: any[]) => {
    first(...args);
    second(...args);
  };
}

/**
 * Merges two refs into one.
 */
function mergeRefs<T>(
  first?: Ref<T>,
  second?: Ref<T>,
): RefCallback<T> | undefined {
  if (!first) {
    return second as RefCallback<T> | undefined;
  }

  if (!second) {
    return first as RefCallback<T> | undefined;
  }

  return composeRefs(first, second);
}

/**
 * Safely merges multiple props objects.
 */
export function mergeProps<T extends Props>(
  ...sources: Partial<T>[]
): T {
  const result: Props = {};

  for (const source of sources) {
    if (!source) {
      continue;
    }

    for (const key of Object.keys(source)) {
      const value = source[key];

      switch (key) {
        case "className":
          result.className = cn(
            result.className,
            value,
          );
          break;

        case "style":
          result.style = {
            ...(result.style as CSSProperties),
            ...(value as CSSProperties),
          };
          break;

        case "ref":
          result.ref = mergeRefs(
            result.ref,
            value,
          );
          break;

        default:
          if (isEventHandler(key)) {
            result[key] = composeEventHandlers(
              result[key],
              value,
            );
          } else {
            result[key] = value;
          }
      }
    }
  }

  return result as T;
}

export default mergeProps;
