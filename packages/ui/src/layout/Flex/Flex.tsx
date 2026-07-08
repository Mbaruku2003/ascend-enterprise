"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Flex
 *
 * A specialized Box component that renders
 * with display: flex by default.
 */

import * as React from "react";

import { polymorphicForwardRef } from "../../lib";

import { Box } from "../Box";

import type {
  FlexDefaultElement,
  FlexOwnProps,
  FlexProps,
} from "./Flex.types";

export const Flex = polymorphicForwardRef<
  FlexDefaultElement,
  FlexOwnProps
>(function Flex(props: FlexProps, ref) {
  const {
    inline = false,
    display,
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      ref={ref}
      display={
        display ??
        (inline ? "inline-flex" : "flex")
      }
    />
  );
});

Flex.displayName = "Flex";

export default Flex;
