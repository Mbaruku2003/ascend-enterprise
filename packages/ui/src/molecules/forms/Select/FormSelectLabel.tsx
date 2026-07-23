/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormSelectLabel.tsx
 *
 * Enterprise form label for FormSelect.
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
    FormSelectLabelProps,
} from "./Select.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormSelectLabel =
forwardRef<
HTMLLabelElement,
FormSelectLabelProps
>(

function FormSelectLabel(

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

                required &&

                (

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

FormSelectLabel.displayName =
    "FormSelectLabel";

export default FormSelectLabel;
