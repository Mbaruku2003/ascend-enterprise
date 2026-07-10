/**
 * ============================================================================
 * Ascend UI
 * Shared Selection Constants
 * ============================================================================
 */

import type {
  SelectionShape,
  SelectionSize,
} from "./selection.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SELECTION_SIZE: SelectionSize =
  "md";

export const DEFAULT_SELECTION_SHAPE: SelectionShape =
  "rounded";

/* -------------------------------------------------------------------------- */
/* Group Defaults                                                             */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SELECTION_ORIENTATION =
  "vertical" as const;

export const DEFAULT_SELECTION_SPACING =
  "md" as const;
