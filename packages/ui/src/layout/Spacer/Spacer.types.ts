import type { CSSProperties, ElementType } from "react";

import type { BoxProps } from "../Box";
import type { ResponsiveValue } from "../../types";

/**
 * Preset spacing sizes.
 *
 * Values resolve through the Ascend design token system.
 */
export type SpacerSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

/**
 * Direction in which the spacer occupies space.
 */
export type SpacerAxis = "vertical" | "horizontal";

/**
 * Props for the Spacer component.
 */
export interface SpacerProps
  extends Omit<
    BoxProps,
    | "children"
    | "width"
    | "height"
    | "minWidth"
    | "minHeight"
    | "padding"
    | "margin"
  > {
  /**
   * Rendered element.
   *
   * @default "div"
   */
  as?: ElementType;

  /**
   * Preset spacing size.
   *
   * @default "md"
   */
  size?: ResponsiveValue<SpacerSize>;

  /**
   * Determines whether the spacer occupies
   * vertical or horizontal space.
   *
   * @default "vertical"
   */
  axis?: SpacerAxis;

  /**
   * Allows the spacer to expand and consume
   * available space inside flex layouts.
   *
   * @default false
   */
  grow?: boolean;

  /**
   * Prevents shrinking when used inside
   * flex containers.
   *
   * @default true
   */
  shrink?: boolean;

  /**
   * Additional CSS class names.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSProperties;
}
