/**
 * ============================================================================
 * Ascend UI
 * FormField Styles
 * ============================================================================
 *
 * Layout styles for the FormField molecule.
 *
 * Responsibilities:
 * - Layout
 * - Label alignment
 * - Spacing
 * - Header/Footer positioning
 *
 * Accessibility, validation, IDs and helper/error handling remain in the
 * shared Field infrastructure.
 *
 * ============================================================================
 */

import type {
  FormFieldLabelAlignment,
  FormFieldLayout,
  FormFieldOwnerState,
  FormFieldSpacing,
} from "./FormField.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_FORMFIELD_LAYOUT: FormFieldLayout =
  "vertical";

export const DEFAULT_FORMFIELD_LABEL_ALIGNMENT: FormFieldLabelAlignment =
  "start";

export const DEFAULT_FORMFIELD_SPACING: FormFieldSpacing =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_ROOT_CLASSES = [
  "flex",
  "w-full",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_LAYOUT_CLASSES: Record<
  FormFieldLayout,
  string
> = {
  vertical: [
    "flex-col",
  ].join(" "),

  horizontal: [
    "flex-row",
    "items-start",
    "justify-between",
  ].join(" "),

  inline: [
    "flex-row",
    "items-center",
  ].join(" "),
};

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_SPACING_CLASSES: Record<
  FormFieldSpacing,
  string
> = {
  sm: "gap-2",

  md: "gap-3",

  lg: "gap-4",
};

/* -------------------------------------------------------------------------- */
/* Label Alignment                                                            */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_LABEL_ALIGNMENT_CLASSES: Record<
  FormFieldLabelAlignment,
  string
> = {
  start: "items-start text-left",

  center: "items-center text-center",

  end: "items-end text-right",
};

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_HEADER_CLASSES =
  "flex items-center justify-between";

export const FORMFIELD_ACTION_CLASSES =
  "shrink-0";

export const FORMFIELD_CONTROL_CLASSES =
  "flex flex-col min-w-0 flex-1";

export const FORMFIELD_DESCRIPTION_CLASSES =
  "text-sm text-muted-foreground";

export const FORMFIELD_FOOTER_CLASSES =
  "mt-2";

/* -------------------------------------------------------------------------- */
/* Full Width                                                                 */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_FULL_WIDTH_CLASS =
  "w-full";

/* -------------------------------------------------------------------------- */
/* Disabled                                                                   */
/* -------------------------------------------------------------------------- */

export const FORMFIELD_DISABLED_CLASS =
  "opacity-60";

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

export function resolveFormFieldClasses(
  ownerState: FormFieldOwnerState,
): string[] {
  return [
    FORMFIELD_ROOT_CLASSES,

    FORMFIELD_LAYOUT_CLASSES[
      ownerState.layout
    ],

    FORMFIELD_SPACING_CLASSES[
      ownerState.spacing
    ],

    FORMFIELD_LABEL_ALIGNMENT_CLASSES[
      ownerState.labelAlignment
    ],

    ownerState.fullWidth
      ? FORMFIELD_FULL_WIDTH_CLASS
      : "",

    ownerState.disabled
      ? FORMFIELD_DISABLED_CLASS
      : "",
  ];
}
