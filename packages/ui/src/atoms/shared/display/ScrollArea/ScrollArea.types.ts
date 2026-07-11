/**
 * ============================================================================
 * Ascend UI
 * ScrollArea Types
 * ============================================================================
 */

import type { BoxProps } from "../../layout/Box";

export type ScrollOrientation =
  | "vertical"
  | "horizontal"
  | "both";

export type ScrollbarVisibility =
  | "auto"
  | "always"
  | "hover"
  | "never";

export interface ScrollAreaProps
  extends BoxProps {
  /**
   * Scroll direction.
   *
   * @default "vertical"
   */
  orientation?: ScrollOrientation;

  /**
   * Scrollbar visibility.
   *
   * @default "auto"
   */
  scrollbar?: ScrollbarVisibility;
}
