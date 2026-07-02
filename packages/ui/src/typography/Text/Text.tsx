"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Text
 *
 * The foundational typography primitive.
 *
 * Features
 * --------
 * ✓ Polymorphic (`as` prop)
 * ✓ Ref forwarding
 * ✓ Shared typography API
 * ✓ Semantic HTML
 * ✓ Design-token driven styling
 */

import * as React from "react";

import {
  polymorphicForwardRef,
  type As,
} from "../../lib";

import {
  getTypographyClassName,
  resolveTypographyProps,
} from "../shared";

import type {
  TextDefaultElement,
  TextOwnProps,
  TextProps,
} from "./Text.types";

/**
 * The foundational typography component used throughout Ascend.
 *
 * @example
 * ```tsx
 * <Text>Hello World</Text>
 *
 * <Text size="lg" weight="bold">
 *   Large Text
 * </Text>
 *
 * <Text
 *   as="label"
 *   htmlFor="email"
 * >
 *   Email Address
 * </Text>
 * ```
 */
export const Text = polymorphicForwardRef<
  TextDefaultElement,
  TextOwnProps
>(function Text<T extends As = TextDefaultElement>(
  props: TextProps<T>,
  ref,
) {
  const resolved = resolveTypographyProps(props);

  const {
    as,
    children,
    ...rest
  } = resolved;

  const Component = (as ?? "span") as React.ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      className={getTypographyClassName(resolved)}
    >
      {children}
    </Component>
  );
});

Text.displayName = "Text";

export default Text;
