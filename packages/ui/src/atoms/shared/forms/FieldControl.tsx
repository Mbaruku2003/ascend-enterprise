import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "../..";

import {
  DEFAULT_FIELD_SIZE,
  DEFAULT_FIELD_STATE,
} from "./field.styles";

import {
  DEFAULT_FIELD_VARIANT,
  resolveFieldVariantClasses,
  type FieldVariant,
} from "./field.variants";

import type {
  FieldSize,
  FieldState,
} from "./field.types";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface FieldControlProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant.
   */
  variant?: FieldVariant;

  /**
   * Validation state.
   */
  state?: FieldState;

  /**
   * Shared field size.
   */
  size?: FieldSize;

  /**
   * Leading content.
   */
  prefix?: ReactNode;

  /**
   * Trailing content.
   */
  suffix?: ReactNode;

  /**
   * Leading icon.
   */
  leftIcon?: ReactNode;

  /**
   * Trailing icon.
   */
  rightIcon?: ReactNode;

  /**
   * Loading indicator.
   */
  loading?: boolean;

  /**
   * Form control.
   */
   /**
   * Vertical alignment of the control contents.
   *
   * Single-line controls (Input, Select) use "center".
   * Multiline controls (Textarea) use "start".
   *
   * @default "center"
   */
  align?: FieldControlAlignment;
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

const CONTROL_LAYOUT =
  "relative flex gap-2 overflow-hidden";

/* -------------------------------------------------------------------------- */
/* Size                                                                       */
/* -------------------------------------------------------------------------- */

const CONTROL_SIZE: Record<FieldSize, string> = {
  sm: "min-h-9 px-3",

  md: "min-h-11 px-4",

  lg: "min-h-12 px-5",
};

/* -------------------------------------------------------------------------- */
/* Icon                                                                       */
/* -------------------------------------------------------------------------- */

const ICON_CLASS =
  "flex shrink-0 items-center justify-center text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* Prefix / Suffix                                                            */
/* -------------------------------------------------------------------------- */

const AFFIX_CLASS =
  "flex shrink-0 items-center whitespace-nowrap text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FieldControl = forwardRef<
  HTMLDivElement,
  FieldControlProps
>(
  (
    {
      variant = DEFAULT_FIELD_VARIANT,

      state = DEFAULT_FIELD_STATE,

      size = DEFAULT_FIELD_SIZE,

      align = "center",

      prefix,

      suffix,

      leftIcon,

      rightIcon,

      loading = false,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          CONTROL_LAYOUT,
          CONTROL_ALIGNMENT_CLASSES[
            align
        ],
          CONTROL_SIZE[size],
          ...resolveFieldVariantClasses(
            variant,
            state,
          ),
          className,
        )}
        {...props}
      >
        {prefix && (
          <span className={AFFIX_CLASS}>
            {prefix}
          </span>
        )}

        {leftIcon && (
          <span className={ICON_CLASS}>
            {leftIcon}
          </span>
        )}

        <div className="flex-1 min-w-0">
          {children}
        </div>

        {loading && (
          <div className="shrink-0">
            {/* Spinner will be injected here */}
          </div>
        )}

        {rightIcon && (
          <span className={ICON_CLASS}>
            {rightIcon}
          </span>
        )}

        {suffix && (
          <span className={AFFIX_CLASS}>
            {suffix}
          </span>
        )}
      </div>
    );
  },
);
const CONTROL_ALIGNMENT_CLASSES: Record<
  FieldControlAlignment,
  string
> = {
  center: "items-center",

  start: "items-start",
};

FieldControl.displayName = "FieldControl";

export default FieldControl;
export type FieldControlAlignment =
  | "center"
  | "start";
