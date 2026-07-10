/**
 * ============================================================================
 * Ascend UI
 * Grid Context
 * ============================================================================
 */

import {
  createContext,
  useContext,
} from "react";

import type {
  GridColumns,
  GridGap,
} from "./Grid.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface GridContextValue {
  columns: GridColumns;

  gap: GridGap;
}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const GridContext =
  createContext<GridContextValue | null>(
    null,
  );

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useGridContext() {
  return useContext(GridContext);
}

export default GridContext;
