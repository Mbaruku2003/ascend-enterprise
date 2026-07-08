import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "../../shared";

import {
  SELECTION_CONTROL_CLASSES,
  SELECTION_CONTENT_CLASSES,
  SELECTION_ROOT_CLASSES,
  resolveSelectionClasses,
} from "./selection.styles";

import type {
  SelectionOwnerState,
} from "./selection.types";

export interface SharedSelectionControlProps
  extends HTMLAttributes<HTMLLabelElement> {
  ownerState: SelectionOwnerState;

  indicator: ReactNode;

  input: ReactNode;

  label?: ReactNode;

  description?: ReactNode;
}

export const SelectionControl = forwardRef<
  HTMLLabelElement,
  SharedSelectionControlProps
>(
  (
    {
      ownerState,

      indicator,

      input,

      label,

      description,

      className,

      ...props
    },
    ref,
  ) => (
    <label
      ref={ref}
      className={cn(
        SELECTION_ROOT_CLASSES,
        className,
      )}
      {...props}
    >
      {input}

      <span
        className={cn(
          SELECTION_CONTROL_CLASSES,
          ...resolveSelectionClasses(
            ownerState,
          ),
        )}
      >
        {indicator}
      </span>

      {(label || description) && (
        <span className={SELECTION_CONTENT_CLASSES}>
          {label && (
            <span className="font-medium">
              {label}
            </span>
          )}

          {description && (
            <span className="text-sm text-muted-foreground">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  ),
);

SelectionControl.displayName =
  "SelectionControl";

export default SelectionControl;
