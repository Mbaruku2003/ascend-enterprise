/**
 * Ascend Enterprise UI
 * --------------------
 * Shared Layout Types
 *
 * Shared type definitions for all layout primitives.
 *
 * Used by:
 * - Box
 * - Flex
 * - Stack
 * - Grid
 * - Container
 */

/* -------------------------------------------------------------------------- */
/* Spacing                                                                    */
/* -------------------------------------------------------------------------- */

export type Space =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | "auto";

/* -------------------------------------------------------------------------- */
/* Size                                                                       */
/* -------------------------------------------------------------------------- */

export type Size =
  | number
  | string
  | "auto"
  | "full"
  | "screen"
  | "fit"
  | "min"
  | "max";

export type ContainerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type SectionSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export type SectionBackground =
  | "transparent"
  | "default"
  | "surface"
  | "subtle"
  | "muted"
  | "primary"
  | "secondary";

/* -------------------------------------------------------------------------- */
/* Display                                                                    */
/* -------------------------------------------------------------------------- */

export type Display =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "contents"
  | "none";

/* -------------------------------------------------------------------------- */
/* Position                                                                    */
/* -------------------------------------------------------------------------- */

export type Position =
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky";

/* -------------------------------------------------------------------------- */
/* Overflow                                                                    */
/* -------------------------------------------------------------------------- */

export type Overflow =
  | "visible"
  | "hidden"
  | "clip"
  | "scroll"
  | "auto";

/* -------------------------------------------------------------------------- */
/* Flex                                                                        */
/* -------------------------------------------------------------------------- */

export type FlexDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type FlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export type AlignItems =
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "baseline";

export type AlignContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export type AlignSelf =
  | "auto"
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "baseline";

/* -------------------------------------------------------------------------- */
/* Grid                                                                        */
/* -------------------------------------------------------------------------- */

export type GridAutoFlow =
  | "row"
  | "column"
  | "dense"
  | "row dense"
  | "column dense";

/* -------------------------------------------------------------------------- */
/* Border Radius                                                               */
/* -------------------------------------------------------------------------- */

export type Radius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

/* -------------------------------------------------------------------------- */
/* Shadow                                                                      */
/* -------------------------------------------------------------------------- */

export type Shadow =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

/* -------------------------------------------------------------------------- */
/* Layout Props                                                                */
/* -------------------------------------------------------------------------- */

export interface LayoutProps {
  /* Display */

  display?: Display;

  /* Position */

  position?: Position;

  top?: Size;
  right?: Size;
  bottom?: Size;
  left?: Size;

  zIndex?: number;

  /* Sizing */

  width?: Size;
  height?: Size;

  minWidth?: Size;
  minHeight?: Size;

  maxWidth?: Size;
  maxHeight?: Size;

  /* Margin */

  m?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;

  mx?: Space;
  my?: Space;

  /* Padding */

  p?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;

  px?: Space;
  py?: Space;

  /* Border */

  rounded?: Radius;

  shadow?: Shadow;

  /* Overflow */

  overflow?: Overflow;

  overflowX?: Overflow;

  overflowY?: Overflow;

  /* Flex */

  flex?: string | number;

  direction?: FlexDirection;

  wrap?: FlexWrap;

  justify?: JustifyContent;

  align?: AlignItems;

  alignContent?: AlignContent;

  alignSelf?: AlignSelf;

  gap?: Space;

  rowGap?: Space;

  columnGap?: Space;

  /* Grid */

  columns?: number | string;

  rows?: number | string;

  autoFlow?: GridAutoFlow;
}
