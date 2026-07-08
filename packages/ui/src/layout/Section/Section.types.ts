import type { CSSProperties, ElementType, ReactNode } from "react";

import type { BoxProps } from "../Box";
import type { ResponsiveValue } from "../../types";

/**
 * Preset vertical spacing sizes.
 *
 * Values resolve through the design token system.
 */
export type SectionSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

/**
 * Semantic background variants.
 *
 * These map to theme color tokens.
 */
export type SectionBackground =
  | "transparent"
  | "default"
  | "surface"
  | "subtle"
  | "muted"
  | "primary"
  | "secondary";

/**
 * Props for the Section component.
 */
export interface SectionProps
  extends Omit<
    BoxProps,
    | "as"
    | "children"
    | "padding"
    | "paddingTop"
    | "paddingBottom"
    | "background"
  > {
  /**
   * Element rendered by the component.
   *
   * @default "section"
   */
  as?: ElementType;

  /**
   * Section content.
   */
  children?: ReactNode;

  /**
   * Preset vertical spacing.
   *
   * Applies equal top and bottom padding.
   *
   * @default "xl"
   */
  size?: ResponsiveValue<SectionSize>;

  /**
   * Override vertical padding.
   */
  paddingY?: ResponsiveValue<SectionSize>;

  /**
   * Override top padding.
   */
  paddingTop?: ResponsiveValue<SectionSize>;

  /**
   * Override bottom padding.
   */
  paddingBottom?: ResponsiveValue<SectionSize>;

  /**
   * Background variant.
   *
   * Uses design tokens.
   *
   * @default "transparent"
   */
  background?: SectionBackground;

  /**
   * Adds a divider below the section.
   *
   * @default false
   */
  bordered?: boolean;

  /**
   * Makes the section fill the viewport height.
   *
   * @default false
   */
  fullHeight?: boolean;

  /**
   * Additional CSS class names.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSProperties;
}
