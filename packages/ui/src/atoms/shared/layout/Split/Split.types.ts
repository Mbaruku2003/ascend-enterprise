import type { BoxProps } from "../Box";

import type {
  LayoutAlign,
  LayoutSpace,
  LayoutWrap,
} from "../types";

/* -------------------------------------------------------------------------- */

export interface SplitProps
  extends Omit<BoxProps, "children"> {
  /**
   * Space between children.
   *
   * @default "md"
   */
  gap?: LayoutSpace;

  /**
   * Vertical alignment.
   *
   * @default "center"
   */
  align?: LayoutAlign;

  /**
   * Wrapping behavior.
   *
   * @default "nowrap"
   */
  wrap?: LayoutWrap;

  /**
   * Reverse direction.
   *
   * @default false
   */
  reverse?: boolean;
}
