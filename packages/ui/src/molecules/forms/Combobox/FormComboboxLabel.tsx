/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormComboboxLabel.tsx
 *
 * Enterprise form label for FormCombobox.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    Label,
} from "@/atoms/forms/Label";

import {
    cn,
} from "@/utils";

import type {
    FormComboboxLabelProps,
} from "./Combobox.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormComboboxLabel =
forwardRef<
HTMLLabelElement,
FormComboboxLabelProps
>(

function FormComboboxLabel(

{

    className,

    children,

    required = false,

    ...props

},

forwardedRef,

) {

    return (

        <Label

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "items-center",

                "gap-1",

                "font-medium",

                className,

            )}

        >

            <span>

                {children}

            </span>

            {

                required && (

                    <span

                        aria-hidden="true"

                        className="
                            text-destructive
                            select-none
                        "

                    >

                        *

                    </span>

                )

            }

        </Label>

    );

},

);

FormComboboxLabel.displayName =
    "FormComboboxLabel";

export default FormComboboxLabel;
