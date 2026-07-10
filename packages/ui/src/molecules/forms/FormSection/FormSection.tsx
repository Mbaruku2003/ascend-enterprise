import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  FORM_SECTION_BORDER,
  FORM_SECTION_CONTENT,
  FORM_SECTION_DESCRIPTION,
  FORM_SECTION_HEADER,
  FORM_SECTION_ROOT,
  FORM_SECTION_TITLE,
} from "./FormSection.styles";

import type {
  FormSectionProps,
} from "./FormSection.types";

export const FormSection = forwardRef<
  HTMLElement,
  FormSectionProps
>(
  (
    {
      title,
      description,
      actions,
      bordered = true,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(
        FORM_SECTION_ROOT,
        bordered &&
          FORM_SECTION_BORDER,
        className,
      )}
      {...props}
    >
      {(title ||
        description ||
        actions) && (
        <header
          className={
            FORM_SECTION_HEADER
          }
        >
          <div>
            {title && (
              <h2
                className={
                  FORM_SECTION_TITLE
                }
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className={
                  FORM_SECTION_DESCRIPTION
                }
              >
                {description}
              </p>
            )}
          </div>

          {actions}
        </header>
      )}

      <div
        className={
          FORM_SECTION_CONTENT
        }
      >
        {children}
      </div>
    </section>
  ),
);

FormSection.displayName =
  "FormSection";

export default FormSection;
