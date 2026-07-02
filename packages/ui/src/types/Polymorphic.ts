/**
 * Ascend Enterprise UI
 * --------------------
 * Polymorphic Types
 *
 * Shared utility types for building polymorphic components.
 *
 * These types allow components to render as different HTML elements
 * or React components via the `as` prop while preserving full
 * TypeScript inference.
 */

import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
} from "react";

/* -------------------------------------------------------------------------- */
/* Element Type                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Any valid React element or component.
 */
export type As = ElementType;

/* -------------------------------------------------------------------------- */
/* As Prop                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Adds support for the `as` prop.
 *
 * Example:
 *
 * <Button as="a" href="/docs" />
 */
export interface AsProp<T extends As> {
  as?: T;
}

/* -------------------------------------------------------------------------- */
/* Props To Omit                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Keys that should not be inherited from the rendered element because
 * they are already defined by the component itself.
 */
export type PropsToOmit<
  T extends As,
  P,
> = keyof (AsProp<T> & P);

/* -------------------------------------------------------------------------- */
/* Polymorphic Props                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Merges a component's own props with the props of the rendered element.
 *
 * Component props always take precedence over intrinsic element props.
 */
export type PolymorphicProps<
  T extends As,
  Props = {},
> = Props &
  AsProp<T> &
  Omit<
    ComponentPropsWithoutRef<T>,
    PropsToOmit<T, Props>
  >;

/* -------------------------------------------------------------------------- */
/* Ref                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Correct ref type for the rendered element.
 */
export type PolymorphicRef<T extends As> =
  ComponentPropsWithRef<T>["ref"];

/* -------------------------------------------------------------------------- */
/* Polymorphic Component                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Function signature for polymorphic components.
 */
export interface PolymorphicComponent<
  DefaultElement extends As,
  Props = {},
> {
  <T extends As = DefaultElement>(
    props: PolymorphicProps<T, Props> & {
      ref?: PolymorphicRef<T>;
    },
  ): ReactElement | null;
}
