/**
 * Ascend Enterprise UI
 * --------------------
 * Responsive Types
 *
 * Shared responsive utility types used throughout the design system.
 *
 * These types allow component props to accept either a single value
 * or breakpoint-specific values.
 */

/* -------------------------------------------------------------------------- */
/* Breakpoints                                                                */
/* -------------------------------------------------------------------------- */

export const BREAKPOINTS = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

/**
 * Available responsive breakpoints.
 */
export type Breakpoint = (typeof BREAKPOINTS)[number];

/* -------------------------------------------------------------------------- */
/* Responsive Object                                                          */
/* -------------------------------------------------------------------------- */

/**
 * A value that can vary by breakpoint.
 *
 * Example:
 *
 * size={{
 *   xs: "sm",
 *   md: "lg",
 * }}
 */
export type ResponsiveObject<T> = Partial<
  Record<Breakpoint, T>
>;

/* -------------------------------------------------------------------------- */
/* Responsive Value                                                           */
/* -------------------------------------------------------------------------- */

/**
 * A prop that can either be:
 *
 * - a single value
 * - a breakpoint map
 *
 * Example:
 *
 * size="md"
 *
 * or
 *
 * size={{
 *   xs: "sm",
 *   md: "lg",
 * }}
 */
export type ResponsiveValue<T> =
  | T
  | ResponsiveObject<T>;

/* -------------------------------------------------------------------------- */
/* Responsive Arrays                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Array syntax inspired by Styled System.
 *
 * Example:
 *
 * size={[
 *   "sm",
 *   "md",
 *   "lg",
 * ]}
 */
export type ResponsiveArray<T> = readonly (
  | T
  | null
)[];

/* -------------------------------------------------------------------------- */
/* Flexible Responsive Prop                                                   */
/* -------------------------------------------------------------------------- */

/**
 * The most flexible responsive prop accepted by Ascend components.
 *
 * Supports:
 *
 * value
 *
 * object
 *
 * array
 */
export type ResponsiveProp<T> =
  | T
  | ResponsiveObject<T>
  | ResponsiveArray<T>;

/* -------------------------------------------------------------------------- */
/* Utility Type                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Makes every property of an object responsive.
 *
 * Example:
 *
 * ResponsiveProps<{
 *   gap: number;
 *   columns: number;
 * }>
 */
export type ResponsiveProps<T> = {
  [K in keyof T]?: ResponsiveProp<T[K]>;
};
