/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormSelectDescription.tsx
 *
 * Helper/description text for FormSelect.
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
    FormSelectDescriptionProps,
} from "./Select.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormSelectDescription =
forwardRef<
HTMLParagraphElement,
FormSelectDescriptionProps
>(

function FormSelectDescription(

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

FormSelectDescription.displayName =
    "FormSelectDescription";

export default FormSelectDescription;
