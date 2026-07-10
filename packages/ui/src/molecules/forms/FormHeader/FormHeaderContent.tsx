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
  FORM_HEADER_CONTENT,
} from "./FormHeader.styles";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormHeaderContent = forwardRef<
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
  ) => {
    const { align } =
      useFormHeaderContext();

    return (
      <div
        ref={ref}
        className={cn(
          FORM_HEADER_CONTENT,
          FORM_HEADER_ALIGNMENT_CLASSES[
            align
          ],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FormHeaderContent.displayName =
  "FormHeader.Content";

export default FormHeaderContent;
