/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencySuffix.tsx
 *
 * Suffix component for CurrencyField.
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
    CurrencySuffixProps,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CurrencySuffix =
forwardRef<
HTMLSpanElement,
CurrencySuffixProps
>(

function CurrencySuffix(

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

CurrencySuffix.displayName =
    "CurrencySuffix";

export default CurrencySuffix;
