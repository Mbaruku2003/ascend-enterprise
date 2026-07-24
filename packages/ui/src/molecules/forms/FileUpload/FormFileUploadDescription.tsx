/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormFileUploadDescription.tsx
 *
 * Helper / description text for FormFileUpload.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    Text,
} from "@/atoms/typography/Text";

import {
    cn,
} from "@/utils";

import type {
    FormFileUploadDescriptionProps,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormFileUploadDescription =
forwardRef<
HTMLParagraphElement,
FormFileUploadDescriptionProps
>(

function FormFileUploadDescription(

{

    className,

    children,

    ...props

},

forwardedRef,

) {

    return (

        <Text

            {...props}

            ref={forwardedRef}

            as="p"

            size="sm"

            tone="muted"

            className={cn(

                "leading-relaxed",

                className,

            )}

        >

            {children}

        </Text>

    );

},

);

FormFileUploadDescription.displayName =
    "FormFileUploadDescription";

export default FormFileUploadDescription;
