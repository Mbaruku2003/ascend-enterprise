/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormFileUploadLabel.tsx
 *
 * Enterprise label component for FormFileUpload.
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
    FormFileUploadLabelProps,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormFileUploadLabel =
forwardRef<
HTMLLabelElement,
FormFileUploadLabelProps
>(

function FormFileUploadLabel(

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
                            select-none
                            text-destructive
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

FormFileUploadLabel.displayName =
    "FormFileUploadLabel";

export default FormFileUploadLabel;
