import type {
  SpinnerOwnerState,
  SpinnerSize,
  SpinnerSpeed,
  SpinnerThickness,
  SpinnerVariant,
} from "./Spinner.types";

/* -------------------------------------------------------------------------- */
/* Default Values                                                             */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SPINNER_VARIANT: SpinnerVariant = "current";

export const DEFAULT_SPINNER_SIZE: SpinnerSize = "md";

export const DEFAULT_SPINNER_SPEED: SpinnerSpeed = "normal";

export const DEFAULT_SPINNER_THICKNESS: SpinnerThickness = "normal";

/* -------------------------------------------------------------------------- */
/* Base Classes                                                               */
/* -------------------------------------------------------------------------- */

export const SPINNER_BASE_CLASSES = [
  "inline-block",
  "rounded-full",
  "border-solid",
  "border-current",
  "border-r-transparent",
  "shrink-0",
].join(" ");

/* -------------------------------------------------------------------------- */
/* Variant Classes                                                            */
/* -------------------------------------------------------------------------- */

export const SPINNER_VARIANT_CLASSES: Record<
  SpinnerVariant,
  string
> = {
  primary: "text-primary",
  secondary: "text-secondary",
  neutral: "text-muted-foreground",
  white: "text-white",
  current: "text-current",
};

/* -------------------------------------------------------------------------- */
/* Size Classes                                                               */
/* -------------------------------------------------------------------------- */

export const SPINNER_SIZE_CLASSES: Record<
  SpinnerSize,
  string
> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

/* -------------------------------------------------------------------------- */
/* Thickness Classes                                                          */
/* -------------------------------------------------------------------------- */

export const SPINNER_THICKNESS_CLASSES: Record<
  SpinnerThickness,
  string
> = {
  thin: "border",
  normal: "border-2",
  thick: "border-[3px]",
};

/* -------------------------------------------------------------------------- */
/* Animation Speed                                                            */
/* -------------------------------------------------------------------------- */

export const SPINNER_SPEED_CLASSES: Record<
  SpinnerSpeed,
  string
> = {
  slow: "animate-[spin_1.5s_linear_infinite]",
  normal: "animate-spin",
  fast: "animate-[spin_0.6s_linear_infinite]",
};

/* -------------------------------------------------------------------------- */
/* Owner State Resolver                                                       */
/* -------------------------------------------------------------------------- */

export function resolveSpinnerClasses(
  ownerState: SpinnerOwnerState,
): string[] {
  return [
    SPINNER_VARIANT_CLASSES[ownerState.variant],
    SPINNER_SIZE_CLASSES[ownerState.size],
    SPINNER_THICKNESS_CLASSES[ownerState.thickness],
    SPINNER_SPEED_CLASSES[ownerState.speed],
  ];
}
