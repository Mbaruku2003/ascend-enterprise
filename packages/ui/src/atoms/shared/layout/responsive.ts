/**
 * ============================================================================
 * Ascend UI
 * Responsive Helpers
 * ============================================================================
 */

export type Breakpoint =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export function responsiveClass(
  breakpoint: Breakpoint,
  className: string,
) {
  return `${breakpoint}:${className}`;
}
