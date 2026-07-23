/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormCombobox.tsx
 *
 * Enterprise form wrapper around the shared Overlay Combobox.
 *
 * ============================================================================
 */

import { forwardRef } from "react";

import {
    ComboboxRoot,
    ComboboxTrigger,
    ComboboxInput,
    ComboboxContent,
} from "@/atoms/shared/Overlay/Combobox";

import { cn } from "@/utils";

import { FormComboboxLabel } from "./FormComboboxLabel";
import { FormComboboxDescription } from "./FormComboboxDescription";
import { FormComboboxError } from "./FormComboboxError";

import type {
    FormComboboxProps,
} from "./Combobox.types";

export const FormCombobox = forwardRef<
    HTMLDivElement,
    FormComboboxProps
>(function FormCombobox(
    {
        className,

        label,
        required,
        labelSuffix,

        description,
        error,
        invalid = false,

        id,
        name,

        placeholder = "Search...",

        children,

        ...props
    },
    ref,
) {

    const fieldId =
        id ??
        name;

    const descriptionId =
        description && fieldId
            ? `${fieldId}-description`
            : undefined;

    const errorId =
        error && fieldId
            ? `${fieldId}-error`
            : undefined;

    const describedBy =
        [descriptionId, errorId]
            .filter(Boolean)
            .join(" ") || undefined;

    return (

        <div

            ref={ref}

            className={cn(

                "flex",
                "flex-col",
                "gap-2",

                className,

            )}

        >

            {label && (

                <FormComboboxLabel

                    htmlFor={fieldId}

                    required={required}

                >

                    {label}

                    {labelSuffix}

                </FormComboboxLabel>

            )}

            <ComboboxRoot

                {...props}

            >

                <ComboboxTrigger

                    id={fieldId}

                    aria-invalid={
                        invalid || undefined
                    }

                    aria-describedby={
                        describedBy
                    }

                >

                    <ComboboxInput

                        placeholder={
                            placeholder
                        }

                    />

                </ComboboxTrigger>

                <ComboboxContent>

                    {children}

                </ComboboxContent>

            </ComboboxRoot>

            {

                description &&
                !error && (

                    <FormComboboxDescription

                        id={descriptionId}

                    >

                        {description}

                    </FormComboboxDescription>

                )

            }

            {

                error && (

                    <FormComboboxError

                        id={errorId}

                    >

                        {error}

                    </FormComboboxError>

                )

            }

        </div>

    );

});

FormCombobox.displayName =
    "FormCombobox";

export default FormCombobox;
