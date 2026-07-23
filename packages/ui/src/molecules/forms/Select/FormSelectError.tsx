/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormSelectError.tsx
 *
 * Validation error message for FormSelect.
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
    FormSelectErrorProps,
} from "./Select.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormSelectError =
forwardRef<
HTMLParagraphElement,
FormSelectErrorProps
>(

function FormSelectError(

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

                className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                "

                aria-hidden="true"

            />

            <span>

                {children}

            </span>

        </Text>

    );

},

);

FormSelectError.displayName =
    "FormSelectError";

export default FormSelectError;
