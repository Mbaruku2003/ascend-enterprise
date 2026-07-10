/**
 * ============================================================================
 * Ascend UI
 * Surface Styles
 * ============================================================================
 */

import type {
  SurfaceElevation,
  SurfacePadding,
  SurfaceRadius,
  SurfaceVariant,
} from "./Surface.types";

/* -------------------------------------------------------------------------- */
/* Defaults                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SURFACE_VARIANT: SurfaceVariant =
  "filled";

export const DEFAULT_SURFACE_ELEVATION: SurfaceElevation =
  "none";

export const DEFAULT_SURFACE_RADIUS: SurfaceRadius =
  "lg";

export const DEFAULT_SURFACE_PADDING: SurfacePadding =
  "md";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export const SURFACE_ROOT_CLASS =
  "transition-colors duration-200";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const SURFACE_VARIANT_CLASSES: Record<
  SurfaceVariant,
  string
> = {
  filled:
    "bg-background border border-border",

  outlined:
    "border border-border bg-transparent",

  elevated:
    "bg-background",

  ghost:
    "bg-transparent",
};

/* -------------------------------------------------------------------------- */
/* Elevation                                                                  */
/* -------------------------------------------------------------------------- */

export const SURFACE_ELEVATION_CLASSES: Record<
  SurfaceElevation,
  string
> = {
  none: "",

  xs: "shadow-xs",

  sm: "shadow-sm",

  md: "shadow-md",

  lg: "shadow-lg",

  xl: "shadow-xl",
};

/* -------------------------------------------------------------------------- */
/* Radius                                                                     */
/* -------------------------------------------------------------------------- */

export const SURFACE_RADIUS_CLASSES: Record<
  SurfaceRadius,
  string
> = {
  none: "rounded-none",

  sm: "rounded-sm",

  md: "rounded-md",

  lg: "rounded-lg",

  xl: "rounded-xl",

  full: "rounded-full",
};

/* -------------------------------------------------------------------------- */
/* Padding                                                                    */
/* -------------------------------------------------------------------------- */

export const SURFACE_PADDING_CLASSES: Record<
  SurfacePadding,
  string
> = {
  none: "",

  xs: "p-1",

  sm: "p-2",

  md: "p-4",

  lg: "p-6",

  xl: "p-8",
};

/* -------------------------------------------------------------------------- */
/* Interactive                                                                */
/* -------------------------------------------------------------------------- */

export const SURFACE_INTERACTIVE_CLASS =
  [
    "cursor-pointer",
    "hover:shadow-md",
    "active:scale-[0.99]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
  ].join(" ");

export function resolveSurfaceClasses({
  variant,
  elevation,
  radius,
  padding,
  interactive,
}: {
  variant: SurfaceVariant;
  elevation: SurfaceElevation;
  radius: SurfaceRadius;
  padding: SurfacePadding;
  interactive: boolean;
}) {
  return [
    SURFACE_ROOT_CLASS,

    SURFACE_VARIANT_CLASSES[
      variant
    ],

    SURFACE_ELEVATION_CLASSES[
      elevation
    ],

    SURFACE_RADIUS_CLASSES[
      radius
    ],

    SURFACE_PADDING_CLASSES[
      padding
    ],

    interactive
      ? SURFACE_INTERACTIVE_CLASS
      : "",
  ];
}
