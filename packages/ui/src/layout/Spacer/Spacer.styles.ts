import type { CSSProperties } from "react";

import type {
  SpacerAxis,
  SpacerSize,
} from "./Spacer.types";

import type { ResponsiveValue } from "../../types";

/**
 * Default spacer size.
 */
export const DEFAULT_SPACER_SIZE: SpacerSize = "md";

/**
 * Default spacer axis.
 */
export const DEFAULT_SPACER_AXIS: SpacerAxis = "vertical";

/**
 * Maps spacer sizes to design tokens.
 *
 * TODO:
 * Replace these CSS variables with imports from
 * packages/design once the design token exports
 * are finalized.
 */
export const SPACER_SIZES: Record<
  SpacerSize,
  CSSProperties["width"]
> = {
  none: "0",
  xs: "var(--spacing-4)",
  sm: "var(--spacing-6)",
  md: "var(--spacing-8)",
  lg: "var(--spacing-12)",
  xl: "var(--spacing-16)",
  "2xl": "var(--spacing-24)",
  "3xl": "var(--spacing-32)",
};

/**
 * Resolves a responsive spacer size.
 */
export function resolveSpacerSize(
  value: ResponsiveValue<SpacerSize>
): ResponsiveValue<CSSProperties["width"]> {
  if (typeof value === "string") {
    return SPACER_SIZES[value];
  }

  if (!value || typeof value !== "object") {
    return SPACER_SIZES[DEFAULT_SPACER_SIZE];
  }

  const resolved: Record<
    string,
    CSSProperties["width"]
  > = {};

  for (const [breakpoint, size] of Object.entries(value)) {
    resolved[breakpoint] = SPACER_SIZES[size];
  }

  return resolved;
}

/**
 * Resolves width based on axis.
 */
export function resolveSpacerWidth(
  axis: SpacerAxis,
  size: ResponsiveValue<SpacerSize>
): ResponsiveValue<CSSProperties["width"]> {
  return axis === "horizontal"
    ? resolveSpacerSize(size)
    : "100%";
}

/**
 * Resolves height based on axis.
 */
export function resolveSpacerHeight(
  axis: SpacerAxis,
  size: ResponsiveValue<SpacerSize>
): ResponsiveValue<CSSProperties["height"]> {
  return axis === "vertical"
    ? resolveSpacerSize(size)
    : "1px";
}

/**
 * Resolves flex grow.
 */
export function resolveSpacerGrow(
  grow?: boolean
): CSSProperties["flexGrow"] {
  return grow ? 1 : 0;
}

/**
 * Resolves flex shrink.
 */
export function resolveSpacerShrink(
  shrink?: boolean
): CSSProperties["flexShrink"] {
  return shrink === false ? 0 : 1;
}
