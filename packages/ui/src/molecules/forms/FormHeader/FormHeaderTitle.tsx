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
  FORM_HEADER_TITLE,
} from "./FormHeader.styles";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormHeaderTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
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
      <h2
        ref={ref}
        className={cn(
          FORM_HEADER_TITLE,
          FORM_HEADER_ALIGNMENT_CLASSES[
            align
          ],
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    );
  },
);

FormHeaderTitle.displayName =
  "FormHeader.Title";

export default FormHeaderTitle;
