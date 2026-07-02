/**
 * Ascend Enterprise UI
 * --------------------
 * Polymorphic Forward Ref
 *
 * Strongly typed helper for creating polymorphic components that support:
 *
 * ✓ Generic `as` prop
 * ✓ Ref forwarding
 * ✓ Native element prop inference
 * ✓ Full IntelliSense
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
 * - Grid
 * - Stack
 * - Container
 */

import * as React from "react";

import type {
  As,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "./polymorphic";

/**
 * Creates a polymorphic React component with proper typing.
 */
export function polymorphicForwardRef<
  DefaultElement extends As,
  Props = {},
>(
  render: <T extends As = DefaultElement>(
    props: PolymorphicComponentProps<T, Props>,
    ref: PolymorphicRef<T>,
  ) => React.ReactElement | null,
): PolymorphicComponent<DefaultElement, Props> {
  return React.forwardRef(render as never) as unknown as PolymorphicComponent<
    DefaultElement,
    Props
  >;
}

export default polymorphicForwardRef;
