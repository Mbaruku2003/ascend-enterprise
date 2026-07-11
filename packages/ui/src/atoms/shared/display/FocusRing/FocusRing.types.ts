/**
 * ============================================================================
 * Ascend UI
 * FocusRing Types
 * ============================================================================
 */

import type { HTMLAttributes } from "react";

export type FocusRingVariant =
  | "default"
  | "inset"
  | "none";

export interface FocusRingProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Focus ring variant.
   *
   * @default "default"
   */
  variant?: FocusRingVariant;

  /**
   * Disable focus ring.
   *
   * @default false
   */
  disabled?: boolean;
}
