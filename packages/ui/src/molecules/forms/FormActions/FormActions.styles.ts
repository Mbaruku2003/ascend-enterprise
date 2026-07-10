/**
 * ============================================================================
 * Ascend UI
 * FormActions Styles
 * ============================================================================
 */

import type {
  FormActionsAlign,
  FormActionsDirection,
  FormActionsGap,
  FormActionsJustify,
} from "./FormActions.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FORM_ACTIONS_DIRECTION: FormActionsDirection =
  "horizontal";

export const DEFAULT_FORM_ACTIONS_JUSTIFY: FormActionsJustify =
  "end";

export const DEFAULT_FORM_ACTIONS_ALIGN: FormActionsAlign =
  "center";

export const DEFAULT_FORM_ACTIONS_GAP: FormActionsGap =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_ROOT =
  "flex pt-6";

/* -------------------------------------------------------------------------- */
/* Direction                                                                  */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_DIRECTION_CLASSES = {
  horizontal: "flex-row",

  vertical: "flex-col",
} satisfies Record<
  FormActionsDirection,
  string
>;

/* -------------------------------------------------------------------------- */
/* Responsive                                                                 */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_RESPONSIVE =
  "flex-col sm:flex-row";

/* -------------------------------------------------------------------------- */
/* Main Axis                                                                  */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_JUSTIFY_CLASSES = {
  start: "justify-start",

  center: "justify-center",

  end: "justify-end",

  between: "justify-between",
} satisfies Record<
  FormActionsJustify,
  string
>;

/* -------------------------------------------------------------------------- */
/* Cross Axis                                                                 */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_ALIGN_CLASSES = {
  start: "items-start",

  center: "items-center",

  end: "items-end",

  stretch: "items-stretch",
} satisfies Record<
  FormActionsAlign,
  string
>;

/* -------------------------------------------------------------------------- */
/* Gap                                                                        */
/* -------------------------------------------------------------------------- */

export const FORM_ACTIONS_GAP_CLASSES = {
  sm: "gap-2",

  md: "gap-3",

  lg: "gap-4",
} satisfies Record<
  FormActionsGap,
  string
>;
