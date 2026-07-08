import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import type {
  ComponentStatus,
} from "../shared";

/* -------------------------------------------------------------------------- */
/* Heading Level                                                              */
/* -------------------------------------------------------------------------- */

export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

/* -------------------------------------------------------------------------- */
/* Heading Variant                                                            */
/* -------------------------------------------------------------------------- */

export type HeadingVariant =
  | "display"
  | "title"
  | "subtitle"
  | "section";

/* -------------------------------------------------------------------------- */
/* Heading Weight                                                             */
/* -------------------------------------------------------------------------- */

export type HeadingWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

/* -------------------------------------------------------------------------- */
/* Heading Alignment                                                          */
/* -------------------------------------------------------------------------- */

export type HeadingAlign =
  | "left"
  | "center"
  | "right";

/* -------------------------------------------------------------------------- */
/* Heading Transform                                                          */
/* -------------------------------------------------------------------------- */

export type HeadingTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

/* -------------------------------------------------------------------------- */
/* Heading Props                                                              */
/* -------------------------------------------------------------------------- */

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic HTML heading level.
   *
   * @default 2
   */
  level?: HeadingLevel;

  /**
   * Visual style.
   *
   * @default "title"
   */
  variant?: HeadingVariant;

  /**
   * Font weight.
   *
   * @default "bold"
   */
  weight?: HeadingWeight;

  /**
   * Semantic color.
   */
  status?: ComponentStatus;

  /**
   * Alignment.
   *
   * @default "left"
   */
  align?: HeadingAlign;

  /**
   * Text transform.
   *
   * @default "none"
   */
  transform?: HeadingTransform;

  /**
   * Truncate overflowing text.
   *
   * @default false
   */
  truncate?: boolean;

  /**
   * Heading content.
   */
  children?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Owner State                                                                */
/* -------------------------------------------------------------------------- */

export interface HeadingOwnerState {
  level: HeadingLevel;
  variant: HeadingVariant;
  weight: HeadingWeight;
  status?: ComponentStatus;
  align: HeadingAlign;
  transform: HeadingTransform;
  truncate: boolean;
}
