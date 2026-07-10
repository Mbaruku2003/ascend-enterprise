import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import FormHeaderContext from "./FormHeaderContext";

import {
  FormHeaderActions,
} from "./FormHeaderActions";

import {
  FormHeaderContent,
} from "./FormHeaderContent";

import {
  FormHeaderDescription,
} from "./FormHeaderDescription";

import {
  FormHeaderSubtitle,
} from "./FormHeaderSubtitle";

import {
  FormHeaderTitle,
} from "./FormHeaderTitle";

import {
  DEFAULT_FORM_HEADER_ALIGNMENT,
  FORM_HEADER_ALIGNMENT_CLASSES,
  FORM_HEADER_ROOT,
  FORM_HEADER_TOP,
} from "./FormHeader.styles";

import type {
  FormHeaderProps,
} from "./FormHeader.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const FormHeaderRoot = forwardRef<
  HTMLDivElement,
  FormHeaderProps
>(
  (
    {
      align =
        DEFAULT_FORM_HEADER_ALIGNMENT,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <FormHeaderContext.Provider
        value={{
          align,
        }}
      >
        <div
          ref={ref}
          className={cn(
            FORM_HEADER_ROOT,
            FORM_HEADER_ALIGNMENT_CLASSES[
              align
            ],
            className,
          )}
          {...props}
        >
          <div
            className={
              FORM_HEADER_TOP
            }
          >
            {children}
          </div>
        </div>
      </FormHeaderContext.Provider>
    );
  },
);

FormHeaderRoot.displayName =
  "FormHeader";

/* -------------------------------------------------------------------------- */
/* Compound Component                                                         */
/* -------------------------------------------------------------------------- */

export const FormHeader =
  Object.assign(
    FormHeaderRoot,
    {
      Content:
        FormHeaderContent,

      Title:
        FormHeaderTitle,

      Subtitle:
        FormHeaderSubtitle,

      Description:
        FormHeaderDescription,

      Actions:
        FormHeaderActions,
    },
  );

export default FormHeader;
