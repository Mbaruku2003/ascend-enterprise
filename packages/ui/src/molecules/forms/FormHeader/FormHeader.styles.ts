/**
 * ============================================================================
 * Ascend UI
 * FormHeader Styles
 * ============================================================================
 */

import type {
  FormHeaderAlignment,
} from "./FormHeader.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FORM_HEADER_ALIGNMENT: FormHeaderAlignment =
  "start";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FORM_HEADER_ROOT =
  "flex flex-col gap-6";

/* -------------------------------------------------------------------------- */
/* Top Row                                                                    */
/* -------------------------------------------------------------------------- */

export const FORM_HEADER_TOP =
  "flex items-start justify-between gap-6";

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export const FORM_HEADER_CONTENT =
  "flex flex-col gap-1";

/* -------------------------------------------------------------------------- */
/* Typography                                                                 */
/* -------------------------------------------------------------------------- */

export const FORM_HEADER_TITLE =
  "text-2xl font-semibold tracking-tight";

export const FORM_HEADER_SUBTITLE =
  "text-sm font-medium text-primary";

export const FORM_HEADER_DESCRIPTION =
  "text-sm text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export const FORM_HEADER_ALIGNMENT_CLASSES = {
  start: "items-start text-left",

  center: "items-center text-center",
} satisfies Record<
  FormHeaderAlignment,
  string
>;

export const FORM_HEADER_ACTIONS =
  "flex shrink-0 items-center gap-2";

export const FORM_HEADER_CONTENT =
  "flex flex-col gap-1 min-w-0";
