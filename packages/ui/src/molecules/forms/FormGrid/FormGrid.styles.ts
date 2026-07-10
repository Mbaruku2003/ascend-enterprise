/**
 * ============================================================================
 * Ascend UI
 * FormGrid Styles
 * ============================================================================
 */

import type {
  FormGridColumns,
  FormGridGap,
} from "./FormGrid.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FORM_GRID_COLUMNS: FormGridColumns =
  2;

export const DEFAULT_FORM_GRID_GAP: FormGridGap =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FORM_GRID_ROOT =
  "grid w-full";

/* -------------------------------------------------------------------------- */
/* Columns                                                                    */
/* -------------------------------------------------------------------------- */

export const FORM_GRID_COLUMNS = {
  1: "grid-cols-1",

  2: "grid-cols-1 md:grid-cols-2",

  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",

  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
} satisfies Record<FormGridColumns, string>;

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export const FORM_GRID_GAPS = {
  sm: "gap-3",

  md: "gap-6",

  lg: "gap-8",
} satisfies Record<FormGridGap, string>;
