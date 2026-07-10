import {
  forwardRef,
} from "react";

import { cn } from "../../../atoms/shared";

import {
  DEFAULT_FORM_ACTIONS_ALIGN,
  DEFAULT_FORM_ACTIONS_DIRECTION,
  DEFAULT_FORM_ACTIONS_GAP,
  DEFAULT_FORM_ACTIONS_JUSTIFY,
  FORM_ACTIONS_ALIGN_CLASSES,
  FORM_ACTIONS_DIRECTION_CLASSES,
  FORM_ACTIONS_GAP_CLASSES,
  FORM_ACTIONS_JUSTIFY_CLASSES,
  FORM_ACTIONS_RESPONSIVE,
  FORM_ACTIONS_ROOT,
} from "./FormActions.styles";

import type {
  FormActionsProps,
} from "./FormActions.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormActions = forwardRef<
  HTMLDivElement,
  FormActionsProps
>(
  (
    {
      direction =
        DEFAULT_FORM_ACTIONS_DIRECTION,

      justify =
        DEFAULT_FORM_ACTIONS_JUSTIFY,

      align =
        DEFAULT_FORM_ACTIONS_ALIGN,

      gap =
        DEFAULT_FORM_ACTIONS_GAP,

      responsive = true,

      className,

      children,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          FORM_ACTIONS_ROOT,

          responsive
            ? FORM_ACTIONS_RESPONSIVE
            : FORM_ACTIONS_DIRECTION_CLASSES[
                direction
              ],

          FORM_ACTIONS_JUSTIFY_CLASSES[
            justify
          ],

          FORM_ACTIONS_ALIGN_CLASSES[
            align
          ],

          FORM_ACTIONS_GAP_CLASSES[
            gap
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

FormActions.displayName =
  "FormActions";

export default FormActions;
