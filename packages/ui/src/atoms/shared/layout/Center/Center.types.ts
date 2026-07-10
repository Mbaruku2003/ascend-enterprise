/**
 * ============================================================================
 * Ascend UI
 * Center Types
 * ============================================================================
 */

import type { BoxProps } from "../Box";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface CenterProps
  extends BoxProps {
  /**
   * Fill the available height.
   *
   * @default false
   */
  fill?: boolean;

  /**
   * Center text.
   *
   * @default false
   */
  textCenter?: boolean;
}
