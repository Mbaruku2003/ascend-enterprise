import {
  forwardRef,
  useMemo,
} from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_GRID_ITEM_SPAN,
  GRID_ITEM_ROOT_CLASS,
} from "./GridItem.styles";

import type {
  GridItemProps,
} from "./GridItem.types";

import type {
  ResponsiveValue,
} from "./Grid.types";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function resolveSpan(
  span:
    | number
    | ResponsiveValue<number>,
) {
  if (typeof span === "number") {
    return {
      gridColumn: `span ${span} / span ${span}`,
    };
  }

  /**
   * Responsive support will be added
   * in Phase 3.
   */

  return {};
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const GridItem = forwardRef<
  HTMLDivElement,
  GridItemProps
>(
  (
    {
      span = DEFAULT_GRID_ITEM_SPAN,

      rowSpan,

      start,

      style,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    const gridStyle =
      useMemo(
        () => ({
          ...resolveSpan(span),

          ...(typeof rowSpan ===
          "number"
            ? {
                gridRow:
                  `span ${rowSpan} / span ${rowSpan}`,
              }
            : {}),

          ...(typeof start ===
          "number"
            ? {
                gridColumnStart:
                  start,
              }
            : {}),
        }),
        [
          span,
          rowSpan,
          start,
        ],
      );

    return (
      <Box
        ref={ref}
        className={cn(
          GRID_ITEM_ROOT_CLASS,
          className,
        )}
        style={{
          ...gridStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

GridItem.displayName =
  "Grid.Item";

export default GridItem;
