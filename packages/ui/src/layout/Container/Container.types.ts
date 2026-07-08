import type { CSSProperties, ElementType, ReactNode } from "react";

import type { BoxProps } from "../Box";
import type { ResponsiveValue } from "../../types";

/**
 * Preset maximum container widths.
 *
 * These map to design tokens defined in the design package.
 */
export type ContainerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

/**
 * Horizontal padding presets.
 *
 * Values should resolve through the spacing scale
 * in the design token package.
 */
export type ContainerPadding =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/**
 * Props for the Container component.
 */
export interface ContainerProps
  extends Omit<
    BoxProps,
    "as" | "children" | "maxWidth" | "width" | "padding"
  > {
  /**
   * Element to render.
   *
   * @default "div"
   */
  as?: ElementType;

  /**
   * Content rendered inside the container.
   */
  children?: ReactNode;

  /**
   * Predefined responsive width.
   *
   * Ignored when `fluid` is true.
   *
   * @default "xl"
   */
  size?: ContainerSize;

  /**
   * Makes the container span the full available width.
   *
   * @default false
   */
  fluid?: boolean;

  /**
   * Centers the container horizontally.
   *
   * @default true
   */
  centered?: boolean;

  /**
   * Horizontal padding.
   *
   * Accepts responsive values.
   */
  padding?: ResponsiveValue<ContainerPadding>;

  /**
   * Override the computed max width.
   *
   * Useful for marketing pages or custom layouts.
   */
  maxWidth?: CSSProperties["maxWidth"];

  /**
   * Override the container width.
   *
   * Rarely needed.
   */
  width?: CSSProperties["width"];

  /**
   * Additional CSS class names.
   */
  className?: string;
}
