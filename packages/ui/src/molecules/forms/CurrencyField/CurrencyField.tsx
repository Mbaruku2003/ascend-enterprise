/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyField.tsx
 *
 * Root composition component for the enterprise CurrencyField.
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
    CurrencyFieldProvider,
} from "./CurrencyFieldProvider";

import {
    CurrencyInput,
} from "./CurrencyInput";

import {
    CurrencyPrefix,
} from "./CurrencyPrefix";

import {
    CurrencySuffix,
} from "./CurrencySuffix";

import type {
    CurrencyFieldProps,
} from "./CurrencyField.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CurrencyField =
forwardRef<
HTMLDivElement,
CurrencyFieldProps
>(

function CurrencyField(

{

    children,

    className,

    value,

    defaultValue,

    onValueChange,

    currency = "USD",

    locale = "en-US",

    min,

    max,

    precision = 2,

    step = 1,

    allowNegative = true,

    enableWheel = false,

    parse,

    format,

    disabled = false,

    readOnly = false,

},

forwardedRef,

) {

    return (

        <CurrencyFieldProvider

            value={value}

            defaultValue={defaultValue}

            onValueChange={onValueChange}

            currency={currency}

            locale={locale}

            min={min}

            max={max}

            precision={precision}

            step={step}

            allowNegative={allowNegative}

            enableWheel={enableWheel}

            parse={parse}

            format={format}

            disabled={disabled}

            readOnly={readOnly}

        >

            <div

                ref={forwardedRef}

                className={cn(

                    "inline-flex",

                    "items-center",

                    "gap-2",

                    className,

                )}

            >

                {

                    children ??

                    (

                        <>

                            <CurrencyPrefix />

                            <CurrencyInput />
                            <CurrencySuffix />

                        </>

                    )

                }

            </div>

        </CurrencyFieldProvider>

    );

},

);

CurrencyField.displayName =
    "CurrencyField";

export default CurrencyField;
