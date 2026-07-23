/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: Select.types.ts
 *
 * Enterprise Form Select types.
 *
 * This component composes the shared Overlay Select primitives and adds
 * form-specific functionality such as labels, helper text, validation,
 * required state, and enterprise form APIs.
 *
 * ============================================================================
 */

import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

import type {
    SelectProps as OverlaySelectProps,
} from "@/shared/overlay/Select";

/* -------------------------------------------------------------------------- */
/* Shared                                                                     */
/* -------------------------------------------------------------------------- */

export type SelectValue = string;

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export interface FormSelectValidation {

    /**
     * Marks the field as invalid.
     */
    invalid?: boolean;

    /**
     * Error message displayed below the field.
     */
    error?: ReactNode;

    /**
     * Helper/description text.
     */
    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormSelectLabelOptions {

    /**
     * Field label.
     */
    label?: ReactNode;

    /**
     * Whether the field is required.
     */
    required?: boolean;

    /**
     * Optional label suffix.
     */
    labelSuffix?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface FormSelectProps
    extends Omit<
            OverlaySelectProps,
            "children"
        >,
        FormSelectValidation,
        FormSelectLabelOptions,
        ComponentPropsWithoutRef<"div"> {

    /**
     * Form field name.
     */
    name?: string;

    /**
     * Placeholder displayed when nothing is selected.
     */
    placeholder?: string;

    /**
     * Select options/content.
     *
     * Usually composed from Overlay Select primitives:
     *
     * <SelectGroup>
     * <SelectItem />
     * </SelectGroup>
     */
    children: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormSelectLabelProps
    extends ComponentPropsWithoutRef<"label"> {

    required?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

export interface FormSelectDescriptionProps
    extends ComponentPropsWithoutRef<"p"> {}

/* -------------------------------------------------------------------------- */
/* Error                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormSelectErrorProps
    extends ComponentPropsWithoutRef<"p"> {}
