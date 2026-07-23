/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormSelect.tsx
 *
 * Enterprise form wrapper around the Overlay Select primitives.
 *
 * ============================================================================
 */

import { forwardRef } from "react";

import {
    SelectRoot,
    SelectTrigger,
    SelectValue,
    SelectPortal,
    SelectContent,
} from "@/shared/overlay/Select";

import { cn } from "@/utils";

import { FormSelectLabel } from "./FormSelectLabel";
import { FormSelectDescription } from "./FormSelectDescription";
import { FormSelectError } from "./FormSelectError";

import type {
    FormSelectProps,
} from "./Select.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormSelect = forwardRef<
    HTMLDivElement,
    FormSelectProps
>(
function FormSelect(

{

    className,

    label,
    required,
    labelSuffix,

    description,
    error,
    invalid = false,

    placeholder = "Select...",

    children,

    id,
    name,

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

            .join(" ")

            || undefined;

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

                <FormSelectLabel

                    htmlFor={fieldId}

                    required={required}

                >

                    {label}

                    {labelSuffix}

                </FormSelectLabel>

            )}

            <SelectRoot

                {...props}

                name={name}

            >

                <SelectTrigger

                    id={fieldId}

                    aria-invalid={

                        invalid ||

                        undefined

                    }

                    aria-describedby={

                        describedBy

                    }

                >

                    <SelectValue

                        placeholder={placeholder}

                    />

                </SelectTrigger>

                <SelectPortal>

                    <SelectContent>

                        {children}

                    </SelectContent>

                </SelectPortal>

            </SelectRoot>

            {

                description &&

                !error &&

                (

                    <FormSelectDescription

                        id={descriptionId}

                    >

                        {description}

                    </FormSelectDescription>

                )

            }

            {

                error &&

                (

                    <FormSelectError

                        id={errorId}

                    >

                        {error}

                    </FormSelectError>

                )

            }

        </div>

    );

},

);

FormSelect.displayName =
    "FormSelect";

export default FormSelect;
