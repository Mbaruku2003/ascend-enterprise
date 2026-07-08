import type {
  ButtonOwnerState,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from "./Button.types";

/**
 * --------------------------------------------------------------------------
 * Default Values
 * --------------------------------------------------------------------------
 */

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = "primary";

export const DEFAULT_BUTTON_SIZE: ButtonSize = "md";

export const DEFAULT_BUTTON_SHAPE: ButtonShape = "default";

/**
 * --------------------------------------------------------------------------
 * Base Button Classes
 * --------------------------------------------------------------------------
 */

export const BUTTON_BASE_CLASSES = [
  "inline-flex",
  "items-center",
  "justify-center",
  "font-medium",
  "transition-colors",
  "duration-200",
  "select-none",
  "whitespace-nowrap",
  "outline-none",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
].join(" ");

/**
 * --------------------------------------------------------------------------
 * Variant Classes
 * --------------------------------------------------------------------------
 */

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",

  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary",

  outline:
    "border border-border bg-transparent hover:bg-muted text-foreground focus-visible:ring-primary",

  ghost:
    "bg-transparent hover:bg-muted text-foreground focus-visible:ring-primary",

  soft:
    "bg-muted text-foreground hover:bg-muted/80 focus-visible:ring-primary",

  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",

  link:
    "bg-transparent underline-offset-4 hover:underline text-primary p-0 h-auto focus-visible:ring-primary",
};

/**
 * --------------------------------------------------------------------------
 * Size Classes
 * --------------------------------------------------------------------------
 */

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
  xl: "h-12 px-8 text-lg",
};

/**
 * --------------------------------------------------------------------------
 * Shape Classes
 * --------------------------------------------------------------------------
 */

export const BUTTON_SHAPE_CLASSES: Record<ButtonShape, string> = {
  default: "rounded-md",
  rounded: "rounded-lg",
  pill: "rounded-full",
  square: "rounded-none",
};

/**
 * --------------------------------------------------------------------------
 * Width
 * --------------------------------------------------------------------------
 */

export function resolveButtonWidth(fullWidth: boolean): string {
  return fullWidth ? "w-full" : "";
}

/**
 * --------------------------------------------------------------------------
 * Icon Only
 * --------------------------------------------------------------------------
 */

export function resolveIconOnly(size: ButtonSize): string {
  switch (size) {
    case "xs":
      return "w-7 p-0";

    case "sm":
      return "w-8 p-0";

    case "md":
      return "w-10 p-0";

    case "lg":
      return "w-11 p-0";

    case "xl":
      return "w-12 p-0";

    default:
      return "";
  }
}

/**
 * --------------------------------------------------------------------------
 * Disabled State
 * --------------------------------------------------------------------------
 */

export function resolveDisabled(ownerState: ButtonOwnerState): boolean {
  return ownerState.disabled || ownerState.loading;
}
