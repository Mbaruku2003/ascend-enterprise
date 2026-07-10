import {
  forwardRef,
  useMemo,
} from "react";

import { cn } from "../../utils";

import Box from "../Box";

import GridContext from "./GridContext";

import GridItem from "./GridItem";

import {
  DEFAULT_GRID_AUTO_FILL,
  DEFAULT_GRID_COLUMNS,
  DEFAULT_GRID_GAP,
  GRID_ROOT_CLASS,
  resolveGridAlignment,
  resolveGridGap,
} from "./Grid.styles";

import type {
  GridProps,
} from "./Grid.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const GridRoot = forwardRef<
  HTMLDivElement,
  GridProps
>(
  (
    {
      columns =
        DEFAULT_GRID_COLUMNS,

      gap = DEFAULT_GRID_GAP,

      minItemWidth,

      autoFill =
        DEFAULT_GRID_AUTO_FILL,

      align,

      justify,

      style,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    const gridStyle =
      useMemo(() => {
        if (
          typeof columns ===
          "number"
        ) {
          return {
            display: "grid",

            gridTemplateColumns:
              minItemWidth
                ? `repeat(${
                    autoFill
                      ? "auto-fill"
                      : "auto-fit"
                  }, minmax(${minItemWidth},1fr))`
                : `repeat(${columns}, minmax(0,1fr))`,
          };
        }

        /**
         * Responsive columns
         * arrive in Phase 3.
         */

        return {
          display: "grid",
        };
      }, [
        columns,
        minItemWidth,
        autoFill,
      ]);

    return (
      <GridContext.Provider
        value={{
          columns,
          gap,
        }}
      >
        <Box
          ref={ref}
          className={cn(
            GRID_ROOT_CLASS,

            resolveGridGap(
              typeof gap ===
                "string"
                ? gap
                : DEFAULT_GRID_GAP,
            ),

            ...resolveGridAlignment(
              align,
              justify,
            ),

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
      </GridContext.Provider>
    );
  },
);

GridRoot.displayName =
  "Grid";

/* -------------------------------------------------------------------------- */
/* Compound Component                                                         */
/* -------------------------------------------------------------------------- */

export const Grid =
  Object.assign(
    GridRoot,
    {
      Item: GridItem,
    },
  );

export default Grid;
