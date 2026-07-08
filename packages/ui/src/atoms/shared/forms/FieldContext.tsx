import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import type {
  FieldIdSet,
} from "./field.ids";

import type {
  FieldSize,
  FieldState,
  LabelPlacement,
} from "./field.types";

/* -------------------------------------------------------------------------- */
/* Context Value                                                              */
/* -------------------------------------------------------------------------- */

export interface FieldContextValue {
  /**
   * Generated ids shared by the field.
   */
  ids: FieldIdSet;

  /**
   * Validation state.
   */
  state: FieldState;

  /**
   * Shared size.
   */
  size: FieldSize;

  /**
   * Disabled state.
   */
  disabled: boolean;

  /**
   * Required state.
   */
  required: boolean;

  /**
   * Full width.
   */
  fullWidth: boolean;

  /**
   * Label placement.
   */
  labelPlacement: LabelPlacement;
}

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

const FieldContext =
  createContext<FieldContextValue | null>(null);

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface FieldProviderProps {
  value: FieldContextValue;
  children: ReactNode;
}

export function FieldProvider({
  value,
  children,
}: FieldProviderProps) {
  return (
    <FieldContext.Provider value={value}>
      {children}
    </FieldContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useFieldContext(): FieldContextValue {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error(
      "useFieldContext must be used inside a <Field /> component.",
    );
  }

  return context;
}
