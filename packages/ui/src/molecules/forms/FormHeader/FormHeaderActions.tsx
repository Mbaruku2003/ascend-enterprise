import {
  forwardRef,
  type HTMLAttributes,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  FORM_HEADER_ACTIONS,
} from "./FormHeader.styles";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormHeaderActions =
  forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
  >(
    (
      {
        className,
        children,
        ...props
      },
      ref,
    ) => (
      <div
        ref={ref}
        className={cn(
          FORM_HEADER_ACTIONS,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    ),
  );

FormHeaderActions.displayName =
  "FormHeader.Actions";

export default FormHeaderActions;
