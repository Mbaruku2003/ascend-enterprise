import type { CSSProperties } from "react";

import type {
  ContainerPadding,
  ContainerSize,
} from "./Container.types";
import type { ResponsiveValue } from "../../types";

/**
 * Default container size.
 */
export const DEFAULT_CONTAINER_SIZE: ContainerSize = "xl";

/**
 * Default horizontal padding.
 */
export const DEFAULT_CONTAINER_PADDING: ContainerPadding = "md";

/**
 * Maps container size presets to design token values.
 *
 * NOTE:
 * These values should eventually come from
 * packages/design once the token exports are finalized.
 */
export const CONTAINER_MAX_WIDTH: Record<
  ContainerSize,
  CSSProperties["maxWidth"]
> = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
};

/**
 * Horizontal padding scale.
 *
 * Values reference spacing tokens.
 * Replace these CSS variables with the exported spacing
 * tokens from packages/design when available.
 */
export const CONTAINER_PADDING: Record<
  ContainerPadding,
  CSSProperties["paddingInline"]
> = {
  none: "0",
  xs: "var(--spacing-2)",
  sm: "var(--spacing-4)",
  md: "var(--spacing-6)",
  lg: "var(--spacing-8)",
  xl: "var(--spacing-10)",
};

/**
 * Resolves a container max-width.
 */
export function resolveContainerMaxWidth(
  size: ContainerSize,
  fluid?: boolean,
  override?: CSSProperties["maxWidth"]
): CSSProperties["maxWidth"] {
  if (override) {
    return override;
  }

  if (fluid) {
    return "100%";
  }

  return CONTAINER_MAX_WIDTH[size];
}

/**
 * Resolves horizontal padding.
 *
 * Responsive values are forwarded to the styling layer.
 */
export function resolveContainerPadding(
  padding: ResponsiveValue<ContainerPadding>
): ResponsiveValue<CSSProperties["paddingInline"]> {
  if (typeof padding === "string") {
    return CONTAINER_PADDING[padding];
  }

  if (!padding || typeof padding !== "object") {
    return CONTAINER_PADDING[DEFAULT_CONTAINER_PADDING];
  }

  const resolved: Record<string, CSSProperties["paddingInline"]> = {};

  for (const [breakpoint, value] of Object.entries(padding)) {
    resolved[breakpoint] = CONTAINER_PADDING[value];
  }

  return resolved;
}

/**
 * Resolves horizontal centering.
 */
export function resolveContainerMargin(
  centered: boolean = true
): CSSProperties["marginInline"] {
  return centered ? "auto" : undefined;
}
