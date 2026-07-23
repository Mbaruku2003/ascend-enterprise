/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormComboboxDescription.tsx
 *
 * Helper / description text for FormCombobox.
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
    FormComboboxDescriptionProps,
} from "./Combobox.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormComboboxDescription =
forwardRef<
HTMLParagraphElement,
FormComboboxDescriptionProps
>(

function FormComboboxDescription(

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

FormComboboxDescription.displayName =
    "FormComboboxDescription";

export default FormComboboxDescription;
