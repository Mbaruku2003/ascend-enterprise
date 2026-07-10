import {
  forwardRef,
  type HTMLAttributes,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  useFormHeaderContext,
} from "./FormHeaderContext";

import {
  FORM_HEADER_ALIGNMENT_CLASSES,
  FORM_HEADER_DESCRIPTION,
} from "./FormHeader.styles";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormHeaderDescription =
  forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
  >(
    (
      {
        className,
        children,
        ...props
      },
      ref,
    ) => {
      const { align } =
        useFormHeaderContext();

      return (
        <p
          ref={ref}
          className={cn(
            FORM_HEADER_DESCRIPTION,
            FORM_HEADER_ALIGNMENT_CLASSES[
              align
            ],
            className,
          )}
          {...props}
        >
          {children}
        </p>
      );
    },
  );

FormHeaderDescription.displayName =
  "FormHeader.Description";

export default FormHeaderDescription;
