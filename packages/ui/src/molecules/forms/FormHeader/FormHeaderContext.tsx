import {
  createContext,
  useContext,
} from "react";

import type {
  FormHeaderAlignment,
} from "./FormHeader.types";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface FormHeaderContextValue {
  /**
   * Shared alignment for all header
   * subcomponents.
   */
  align: FormHeaderAlignment;
}

const FormHeaderContext =
  createContext<
    FormHeaderContextValue | null
  >(null);

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useFormHeaderContext() {
  const context = useContext(
    FormHeaderContext,
  );

  if (!context) {
    throw new Error(
      "FormHeader components must be used within <FormHeader>.",
    );
  }

  return context;
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export default FormHeaderContext;
