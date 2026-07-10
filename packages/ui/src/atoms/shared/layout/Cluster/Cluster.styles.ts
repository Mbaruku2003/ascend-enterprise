/**
 * ============================================================================
 * Ascend UI
 * Cluster Styles
 * ============================================================================
 */

import {
  ALIGN_CLASSES,
  GAP_CLASSES,
  JUSTIFY_CLASSES,
} from "../tokens";

import type {
  LayoutAlign,
  LayoutJustify,
  LayoutSpace,
} from "../types";

/* -------------------------------------------------------------------------- */

export const DEFAULT_CLUSTER_GAP: LayoutSpace =
  "md";

export const DEFAULT_CLUSTER_ALIGN: LayoutAlign =
  "center";

export const DEFAULT_CLUSTER_JUSTIFY: LayoutJustify =
  "start";

/* -------------------------------------------------------------------------- */

export const CLUSTER_ROOT_CLASS = [
  "flex",
  "flex-wrap",
].join(" ");

/* -------------------------------------------------------------------------- */

export function resolveClusterClasses(
  gap: LayoutSpace,
  align: LayoutAlign,
  justify: LayoutJustify,
): string[] {
  return [
    CLUSTER_ROOT_CLASS,

    GAP_CLASSES[gap],

    ALIGN_CLASSES[align],

    JUSTIFY_CLASSES[justify],
  ];
}
