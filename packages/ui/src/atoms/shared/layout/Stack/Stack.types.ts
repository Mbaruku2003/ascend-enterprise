/**
 * ============================================================================
 * Ascend UI
 * Stack Types
 * ============================================================================
 */

import type {
  ComponentPropsWithoutRef,
} from "react";

import type {
  LayoutAlign,
  LayoutSpace,
} from "../types";

import type {
  BoxProps,
} from "../Box";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface StackProps
  extends Omit<
      BoxProps,
      "children"
    >,
    ComponentPropsWithoutRef<"div"> {
  /**
   * Space between children.
   *
   * @default "md"
   */
  gap?: LayoutSpace;

  /**
   * Cross-axis alignment.
   *
   * @default "stretch"
   */
  align?: LayoutAlign;
}
