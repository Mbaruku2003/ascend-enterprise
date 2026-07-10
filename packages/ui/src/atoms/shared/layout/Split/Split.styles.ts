import {
  ALIGN_CLASSES,
  GAP_CLASSES,
  WRAP_CLASSES,
} from "../tokens";

import type {
  LayoutAlign,
  LayoutSpace,
  LayoutWrap,
} from "../types";

export const DEFAULT_SPLIT_GAP: LayoutSpace =
  "md";

export const DEFAULT_SPLIT_ALIGN: LayoutAlign =
  "center";

export const DEFAULT_SPLIT_WRAP: LayoutWrap =
  "nowrap";

export const SPLIT_ROOT_CLASS =
  "flex justify-between";

export const SPLIT_REVERSE_CLASS =
  "flex-row-reverse";

export function resolveSplitClasses(
  gap: LayoutSpace,
  align: LayoutAlign,
  wrap: LayoutWrap,
  reverse: boolean,
): string[] {
  return [
    SPLIT_ROOT_CLASS,

    GAP_CLASSES[gap],

    ALIGN_CLASSES[align],

    WRAP_CLASSES[wrap],

    reverse
      ? SPLIT_REVERSE_CLASS
      : "",
  ];
}
