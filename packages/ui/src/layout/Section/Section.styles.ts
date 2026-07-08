import type { CSSProperties } from "react";

import type {
  SectionBackground,
  SectionSize,
} from "./Section.types";
import type { ResponsiveValue } from "../../types";

/**
 * Default section spacing.
 */
export const DEFAULT_SECTION_SIZE: SectionSize = "xl";

/**
 * Default section background.
 */
export const DEFAULT_SECTION_BACKGROUND: SectionBackground =
  "transparent";

/**
 * Maps section spacing presets to design tokens.
 *
 * TODO:
 * Replace these values with imports from
 * packages/design once the spacing token exports
 * are finalized.
 */
export const SECTION_SPACING: Record<
  SectionSize,
  CSSProperties["paddingBlock"]
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
 * Maps background variants to theme tokens.
 *
 * TODO:
 * Replace these CSS variables with exported
 * semantic color tokens from packages/design.
 */
export const SECTION_BACKGROUNDS: Record<
  SectionBackground,
  CSSProperties["background"]
> = {
  transparent: "transparent",
  default: "var(--color-background)",
  surface: "var(--color-surface)",
  subtle: "var(--color-surface-subtle)",
  muted: "var(--color-surface-muted)",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
};

/**
 * Resolves responsive spacing values.
 */
export function resolveSectionSpacing(
  value: ResponsiveValue<SectionSize>
): ResponsiveValue<CSSProperties["paddingBlock"]> {
  if (typeof value === "string") {
    return SECTION_SPACING[value];
  }

  if (!value || typeof value !== "object") {
    return SECTION_SPACING[DEFAULT_SECTION_SIZE];
  }

  const resolved: Record<
    string,
    CSSProperties["paddingBlock"]
  > = {};

  for (const [breakpoint, spacing] of Object.entries(value)) {
    resolved[breakpoint] = SECTION_SPACING[spacing];
  }

  return resolved;
}

/**
 * Resolves responsive padding values.
 */
export function resolveSectionPadding(
  value?: ResponsiveValue<SectionSize>
): ResponsiveValue<CSSProperties["paddingBlock"]> | undefined {
  if (!value) {
    return undefined;
  }

  return resolveSectionSpacing(value);
}

/**
 * Resolves section background.
 */
export function resolveSectionBackground(
  background: SectionBackground
): CSSProperties["background"] {
  return SECTION_BACKGROUNDS[background];
}

/**
 * Resolves minimum height.
 */
export function resolveSectionHeight(
  fullHeight?: boolean
): CSSProperties["minHeight"] {
  return fullHeight ? "100vh" : undefined;
}

/**
 * Resolves optional bottom border.
 */
export function resolveSectionBorder(
  bordered?: boolean
): CSSProperties["borderBottom"] {
  return bordered
    ? "1px solid var(--color-border)"
    : undefined;
}
