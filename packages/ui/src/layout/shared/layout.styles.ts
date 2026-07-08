/**
 * Ascend Enterprise UI
 * --------------------
 * Shared Layout Styles
 *
 * Maps semantic layout props to CSS utility classes.
 */

import { cn } from "../../lib";

import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexWrap,
  GridAutoFlow,
  LayoutProps,
  Overflow,
  Position,
  Radius,
  Shadow,
  Space,
} from "./layout.types";

/* -------------------------------------------------------------------------- */
/* Token Maps                                                                  */
/* -------------------------------------------------------------------------- */

const spacingMap: Record<Exclude<Space, "auto">, string> = {
  0: "0",
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  5: "5",
  6: "6",
  8: "8",
  10: "10",
  12: "12",
  16: "16",
  20: "20",
  24: "24",
};

const radiusMap: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const shadowMap: Record<Shadow, string> = {
  none: "shadow-none",
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
};

const displayMap: Record<Display, string> = {
  block: "block",
  inline: "inline",
  "inline-block": "inline-block",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid",
  contents: "contents",
  none: "hidden",
};

const positionMap: Record<Position, string> = {
  static: "static",
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  sticky: "sticky",
};

const overflowMap: Record<Overflow, string> = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  clip: "overflow-clip",
  scroll: "overflow-scroll",
  auto: "overflow-auto",
};

const directionMap: Record<FlexDirection, string> = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
};

const wrapMap: Record<FlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const justifyMap: Record<string, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap: Record<AlignItems, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const alignContentMap: Record<AlignContent, string> = {
  start: "content-start",
  end: "content-end",
  center: "content-center",
  between: "content-between",
  around: "content-around",
  evenly: "content-evenly",
  stretch: "content-stretch",
};

const alignSelfMap: Record<AlignSelf, string> = {
  auto: "self-auto",
  start: "self-start",
  end: "self-end",
  center: "self-center",
  stretch: "self-stretch",
  baseline: "self-baseline",
};

const autoFlowMap: Record<GridAutoFlow, string> = {
  row: "grid-flow-row",
  column: "grid-flow-col",
  dense: "grid-flow-dense",
  "row dense": "grid-flow-row-dense",
  "column dense": "grid-flow-col-dense",
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function spacing(prefix: string, value?: Space) {
  if (value === undefined) return undefined;

  if (value === "auto") {
    return `${prefix}-auto`;
  }

  return `${prefix}-${spacingMap[value]}`;
}

/* -------------------------------------------------------------------------- */
/* Resolver                                                                    */
/* -------------------------------------------------------------------------- */

export function getLayoutClassName(
  props: LayoutProps,
): string {
  return cn(
    props.display && displayMap[props.display],
    props.position && positionMap[props.position],

    spacing("m", props.m),
    spacing("mt", props.mt),
    spacing("mr", props.mr),
    spacing("mb", props.mb),
    spacing("ml", props.ml),
    spacing("mx", props.mx),
    spacing("my", props.my),

    spacing("p", props.p),
    spacing("pt", props.pt),
    spacing("pr", props.pr),
    spacing("pb", props.pb),
    spacing("pl", props.pl),
    spacing("px", props.px),
    spacing("py", props.py),

    props.gap !== undefined && spacing("gap", props.gap),
    props.rowGap !== undefined &&
      spacing("gap-y", props.rowGap),
    props.columnGap !== undefined &&
      spacing("gap-x", props.columnGap),

    props.rounded && radiusMap[props.rounded],
    props.shadow && shadowMap[props.shadow],

    props.overflow &&
      overflowMap[props.overflow],

    props.overflowX &&
      `overflow-x-${props.overflowX}`,

    props.overflowY &&
      `overflow-y-${props.overflowY}`,

    props.direction &&
      directionMap[props.direction],

    props.wrap &&
      wrapMap[props.wrap],

    props.justify &&
      justifyMap[props.justify],

    props.align &&
      alignMap[props.align],

    props.alignContent &&
      alignContentMap[props.alignContent],

    props.alignSelf &&
      alignSelfMap[props.alignSelf],

    props.autoFlow &&
      autoFlowMap[props.autoFlow],
  );
}
