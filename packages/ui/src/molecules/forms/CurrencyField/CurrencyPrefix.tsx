/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyPrefix.tsx
 *
 * Prefix component for CurrencyField.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {
    useCurrencyField,
} from "./useCurrencyField";

import type {
    CurrencyPrefixProps,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CurrencyPrefix =
forwardRef<
HTMLSpanElement,
CurrencyPrefixProps
>(

function CurrencyPrefix(

{

    children,

    className,

},

forwardedRef,

) {

    const {

        currency,

    } = useCurrencyField();

    return (

        <span

            ref={forwardedRef}

            aria-hidden="true"

            className={cn(

                "inline-flex",

                "items-center",

                "justify-center",

                "shrink-0",

                "select-none",

                "text-muted-foreground",

                "font-medium",

                className,

            )}

        >

            {

                children ??

                currency

            }

        </span>

    );

},

);

CurrencyPrefix.displayName =
    "CurrencyPrefix";

export default CurrencyPrefix;
