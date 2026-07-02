/**
 * Ascend Enterprise UI
 * --------------------
 * Typography Foundation
 *
 * Public exports for the shared typography infrastructure.
 *
 * Every typography component (Text, Heading, Paragraph, Label,
 * Caption, Code, VisuallyHidden, etc.) should import from this
 * module rather than individual files whenever possible.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
  TypographyAlign,
  TypographyColor,
  TypographyDecoration,
  TypographyLineHeight,
  TypographyProps,
  TypographySize,
  TypographyStyle,
  TypographyTracking,
  TypographyTransform,
  TypographyWeight,
  TypographyWrap,
} from "./typography.types";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

export {
  TYPOGRAPHY_ALIGNMENTS,
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_DECORATIONS,
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_STYLES,
  TYPOGRAPHY_TRACKING,
  TYPOGRAPHY_TRANSFORMS,
  TYPOGRAPHY_UTILITIES,
  TYPOGRAPHY_WEIGHTS,
  TYPOGRAPHY_WRAP,
} from "./typography.constants";

/* -------------------------------------------------------------------------- */
/* Styles                                                                     */
/* -------------------------------------------------------------------------- */

export { getTypographyClassName } from "./typography.styles";

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

export {
  resolveTypographyProps,
  isBoldWeight,
  isDisplaySize,
  isInheritedColor,
  isLogicalAlignment,
} from "./typography.utils";
