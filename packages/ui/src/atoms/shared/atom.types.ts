import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Responsive Value                                                           */
/* -------------------------------------------------------------------------- */

export type ResponsiveValue<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

/* -------------------------------------------------------------------------- */
/* Common Sizes                                                               */
/* -------------------------------------------------------------------------- */

export type ComponentSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* -------------------------------------------------------------------------- */
/* Common Variants                                                            */
/* -------------------------------------------------------------------------- */

export type ComponentVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "soft"
  | "destructive"
  | "link";

/* -------------------------------------------------------------------------- */
/* Shapes                                                                     */
/* -------------------------------------------------------------------------- */

export type ComponentShape =
  | "default"
  | "rounded"
  | "pill"
  | "square";

/* -------------------------------------------------------------------------- */
/* Status                                                                     */
/* -------------------------------------------------------------------------- */

export type ComponentStatus =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

/* -------------------------------------------------------------------------- */
/* Alignment                                                                  */
/* -------------------------------------------------------------------------- */

export type HorizontalAlignment =
  | "start"
  | "center"
  | "end";

export type VerticalAlignment =
  | "top"
  | "center"
  | "bottom";

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

export type LoadingPosition =
  | "start"
  | "center"
  | "end";

/* -------------------------------------------------------------------------- */
/* Polymorphic                                                                */
/* -------------------------------------------------------------------------- */

export interface PolymorphicProps<
  T extends ElementType = "div",
> {
  as?: T;

  children?: ReactNode;
}

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {},
> = Props &
  PolymorphicProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof Props | "as">;

/* -------------------------------------------------------------------------- */
/* Shared Owner State                                                         */
/* -------------------------------------------------------------------------- */

export interface ComponentOwnerState {
  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;
}
