"use client";

/**
 * Ascend Enterprise UI
 * --------------------
 * Grid
 *
 * A specialized Box component that renders
 * with display: grid by default.
 *
 * Features
 * --------
 * ✓ Grid layout by default
 * ✓ Ref forwarding
 * ✓ Polymorphic rendering
 * ✓ Inherits the complete Box API
 */

import { polymorphicForwardRef } from "../../lib";

import { Box } from "../Box";

import type {
  GridDefaultElement,
  GridOwnProps,
  GridProps,
} from "./Grid.types";

export const Grid = polymorphicForwardRef<
  GridDefaultElement,
  GridOwnProps
>(function Grid(props: GridProps, ref) {
  const {
    display,
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      ref={ref}
      display={display ?? "grid"}
    />
  );
});

Grid.displayName = "Grid";

export default Grid;
