import { forwardRef } from "react";

import { Box } from "../Box";

import type { SpacerProps } from "./Spacer.types";

import {
  DEFAULT_SPACER_AXIS,
  DEFAULT_SPACER_SIZE,
  resolveSpacerGrow,
  resolveSpacerHeight,
  resolveSpacerShrink,
  resolveSpacerWidth,
} from "./Spacer.styles";

/**
 * Spacer
 *
 * A layout utility that creates consistent space between
 * elements using the Ascend design token spacing scale.
 *
 * Responsibilities:
 * - Vertical spacing
 * - Horizontal spacing
 * - Flexible growth inside flex layouts
 *
 * Width management belongs to Container.
 * Section spacing belongs to Section.
 */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      as = "div",

      size = DEFAULT_SPACER_SIZE,

      axis = DEFAULT_SPACER_AXIS,

      grow = false,

      shrink = true,

      style,

      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as={as}
        aria-hidden="true"
        width={resolveSpacerWidth(axis, size)}
        height={resolveSpacerHeight(axis, size)}
        flexGrow={resolveSpacerGrow(grow)}
        flexShrink={resolveSpacerShrink(shrink)}
        style={style}
        {...props}
      />
    );
  }
);

Spacer.displayName = "Spacer";
