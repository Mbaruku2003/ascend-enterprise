"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Stack
 *
 * A specialized Flex component that renders
 * with `direction="column"` by default.
 *
 * Features
 * --------
 * ✓ Vertical layout by default
 * ✓ Optional horizontal layout
 * ✓ Supports polymorphic rendering
 * ✓ Ref forwarding
 * ✓ Inherits the complete Flex and Box APIs
 */

import { polymorphicForwardRef } from "../../lib";

import { Flex } from "../Flex";

import type {
  StackDefaultElement,
  StackOwnProps,
  StackProps,
} from "./Stack.types";

export const Stack = polymorphicForwardRef<
  StackDefaultElement,
  StackOwnProps
>(function Stack(props: StackProps, ref) {
  const {
    direction,
    ...rest
  } = props;

  return (
    <Flex
      {...rest}
      ref={ref}
      direction={direction ?? "column"}
    />
  );
});

Stack.displayName = "Stack";

export default Stack;
