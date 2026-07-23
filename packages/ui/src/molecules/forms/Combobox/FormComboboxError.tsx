/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormComboboxError.tsx
 *
 * Validation error message for FormCombobox.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    AlertCircle,
} from "lucide-react";

import {
    Text,
} from "@/atoms/typography/Text";

import {
    cn,
} from "@/utils";

import type {
    FormComboboxErrorProps,
} from "./Combobox.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormComboboxError =
forwardRef<
HTMLParagraphElement,
FormComboboxErrorProps
>(

function FormComboboxError(

{

    className,

    children,

    ...props

},

forwardedRef,

) {

    if (

        children == null ||

        children === false ||

        children === ""

    ) {

        return null;

    }

    return (

        <Text

            {...props}

            ref={forwardedRef}

            as="p"

            size="sm"

            tone="danger"

            role="alert"

            aria-live="polite"

            className={cn(

                "flex",

                "items-start",

                "gap-2",

                "leading-relaxed",

                className,

            )}

        >

            <AlertCircle

                aria-hidden="true"

                className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                "

            />

            <span>

                {children}

            </span>

        </Text>

    );

},

);

FormComboboxError.displayName =
    "FormComboboxError";

export default FormComboboxError;
