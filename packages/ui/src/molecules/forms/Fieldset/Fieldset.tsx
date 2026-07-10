import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  FIELDSET_BORDERLESS,
  FIELDSET_CONTENT,
  FIELDSET_DESCRIPTION,
  FIELDSET_HEADER,
  FIELDSET_INFO,
  FIELDSET_LEGEND,
  FIELDSET_ROOT,
} from "./Fieldset.styles";

import type {
  FieldsetProps,
} from "./Fieldset.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Fieldset = forwardRef<
  HTMLFieldSetElement,
  FieldsetProps
>(
  (
    {
      legend,
      description,
      actions,
      borderless = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <fieldset
      ref={ref}
      disabled={disabled}
      className={cn(
        FIELDSET_ROOT,
        borderless &&
          FIELDSET_BORDERLESS,
        className,
      )}
      {...props}
    >
      {(legend ||
        description ||
        actions) && (
        <div
          className={FIELDSET_HEADER}
        >
          <div
            className={FIELDSET_INFO}
          >
            {legend && (
              <legend
                className={
                  FIELDSET_LEGEND
                }
              >
                {legend}
              </legend>
            )}

            {description && (
              <p
                className={
                  FIELDSET_DESCRIPTION
                }
              >
                {description}
              </p>
            )}
          </div>

          {actions}
        </div>
      )}

      <div
        className={FIELDSET_CONTENT}
      >
        {children}
      </div>
    </fieldset>
  ),
);

Fieldset.displayName =
  "Fieldset";

export default Fieldset;
