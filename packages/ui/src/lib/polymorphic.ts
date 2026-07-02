/**
 * Ascend Enterprise UI
 * --------------------
 * Polymorphic Types
 *
 * Shared TypeScript utilities for polymorphic components.
 *
 * These types allow components to support an `as` prop while preserving:
 *
 * ✓ Native HTML props
 * ✓ Ref inference
 * ✓ Autocomplete
 * ✓ Type safety
 *
 * Used by:
 *
 * - Text
 * - Heading
 * - Paragraph
 * - Label
 * - Code
 * - Box
 * - Flex
 * - Stack
 * - Grid
 * - Container
 * - Link
 */

import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

/* -------------------------------------------------------------------------- */
/* Base Types                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Any valid React element or component.
 */
export type As = ElementType;

/**
 * Props belonging to a given element.
 */
export type PropsOf<T extends As> = ComponentPropsWithoutRef<T>;

/**
 * Ref belonging to a given element.
 */
export type PolymorphicRef<T extends As> =
  ComponentPropsWithRef<T>["ref"];

/* -------------------------------------------------------------------------- */
/* Utility Types                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Merge two prop objects.
 *
 * Props from OverrideProps always take precedence.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Props inherited from the rendered element.
 */
export type InheritableElementProps<
  T extends As,
  Props = {},
> = ExtendableProps<PropsOf<T>, Props>;

/* -------------------------------------------------------------------------- */
/* Polymorphic Props                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Adds support for the `as` prop.
 */
export interface AsProp<T extends As> {
  as?: T;
}

/**
 * Complete polymorphic props.
 */
export type PolymorphicComponentProps<
  T extends As,
  Props = {},
> = InheritableElementProps<
  T,
  Props & AsProp<T>
>;

/* -------------------------------------------------------------------------- */
/* Polymorphic Component Type                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Generic polymorphic component signature.
 *
 * Example:
 *
 * const Text: PolymorphicComponent<"span", TextProps>
 */
export interface PolymorphicComponent<
  DefaultElement extends As,
  Props = {},
> {
  <T extends As = DefaultElement>(
    props: PolymorphicComponentProps<T, Props> & {
      ref?: PolymorphicRef<T>;
    },
  ): React.ReactElement | null;
}

/* -------------------------------------------------------------------------- */
/* ForwardRef Helper                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Convenience alias for a forwardRef-compatible polymorphic component.
 */
export type PolymorphicForwardRefComponent<
  DefaultElement extends As,
  Props = {},
> = ForwardRefExoticComponent<
  PropsWithoutRef<
    PolymorphicComponentProps<
      DefaultElement,
      Props
    >
  > &
    RefAttributes<any>
>;
