/**
 * Ascend Enterprise UI
 * --------------------
 * Shared Type Exports
 *
 * Public entry point for all shared UI types.
 */

/* -------------------------------------------------------------------------- */
/* Common Props                                                               */
/* -------------------------------------------------------------------------- */

export type {
  CommonProps,
  CSSVariables,
} from "./CommonProps";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export {
  ALIGNMENTS,
  BREAKPOINTS,
  ELEVATIONS,
  INTENTS,
  JUSTIFICATIONS,
  ORIENTATIONS,
  RADII,
  SIZES,
  STATES,
  TONES,
  VARIANTS,
} from "./Variants";

export type {
  Alignment,
  Breakpoint,
  Elevation,
  Intent,
  Justification,
  Orientation,
  Radius,
  Size,
  State,
  Tone,
  Variant,
} from "./Variants";

/* -------------------------------------------------------------------------- */
/* Responsive                                                                 */
/* -------------------------------------------------------------------------- */

export {
  BREAKPOINTS as RESPONSIVE_BREAKPOINTS,
} from "./Responsive";

export type {
  Breakpoint as ResponsiveBreakpoint,
  ResponsiveArray,
  ResponsiveObject,
  ResponsiveProp,
  ResponsiveProps,
  ResponsiveValue,
} from "./Responsive";

/* -------------------------------------------------------------------------- */
/* Polymorphic                                                                */
/* -------------------------------------------------------------------------- */

export type {
  As,
  AsProp,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
  PropsToOmit,
} from "./Polymorphic";
