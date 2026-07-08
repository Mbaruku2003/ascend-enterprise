import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Spinner Variant                                                            */
/* -------------------------------------------------------------------------- */

export type SpinnerVariant =
  | "primary"
  | "secondary"
  | "neutral"
  | "white"
  | "current";

/* -------------------------------------------------------------------------- */
/* Spinner Size                                                               */
/* -------------------------------------------------------------------------- */

export type SpinnerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* -------------------------------------------------------------------------- */
/* Spinner Speed                                                              */
/* -------------------------------------------------------------------------- */

export type SpinnerSpeed =
  | "slow"
  | "normal"
  | "fast";

/* -------------------------------------------------------------------------- */
/* Spinner Thickness                                                          */
/* -------------------------------------------------------------------------- */

export type SpinnerThickness =
  | "thin"
  | "normal"
  | "thick";

/* -------------------------------------------------------------------------- */
/* Spinner Props                                                              */
/* -------------------------------------------------------------------------- */

export interface SpinnerProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant.
   *
   * @default "current"
   */
  variant?: SpinnerVariant;

  /**
   * Spinner size.
   *
   * @default "md"
   */
  size?: SpinnerSize;

  /**
   * Rotation speed.
   *
   * @default "normal"
   */
  speed?: SpinnerSpeed;

  /**
   * Border thickness.
   *
   * @default "normal"
   */
  thickness?: SpinnerThickness;

  /**
   * Accessible label.
   *
   * @default "Loading"
   */
  label?: string;

  /**
   * Optional children.
   */
  children?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface SpinnerOwnerState {
  variant: SpinnerVariant;
  size: SpinnerSize;
  speed: SpinnerSpeed;
  thickness: SpinnerThickness;
}
