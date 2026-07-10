import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  DEFAULT_FORM_GRID_COLUMNS,
  DEFAULT_FORM_GRID_GAP,
  FORM_GRID_COLUMNS,
  FORM_GRID_GAPS,
  FORM_GRID_ROOT,
} from "./FormGrid.styles";

import type {
  FormGridProps,
} from "./FormGrid.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormGrid = forwardRef<
  HTMLDivElement,
  FormGridProps
>(
  (
    {
      columns =
        DEFAULT_FORM_GRID_COLUMNS,

      gap =
        DEFAULT_FORM_GRID_GAP,

      responsive = true,

      className,

      children,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        FORM_GRID_ROOT,
        responsive
          ? FORM_GRID_COLUMNS[
              columns
            ]
          : `grid-cols-${columns}`,
        FORM_GRID_GAPS[
          gap
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

FormGrid.displayName =
  "FormGrid";

export default FormGrid;
