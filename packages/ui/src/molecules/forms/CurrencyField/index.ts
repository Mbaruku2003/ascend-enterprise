/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Public exports.
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

export {
    default as CurrencyField,
} from "./CurrencyField";

export {
    default as CurrencyInput,
} from "./CurrencyInput";

export {
    default as CurrencyPrefix,
} from "./CurrencyPrefix";

export {
    default as CurrencySuffix,
} from "./CurrencySuffix";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export {
    default as CurrencyFieldProvider,
} from "./CurrencyFieldProvider";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as useCurrencyField,
} from "./useCurrencyField";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {

    CurrencyValue,

    CurrencyParser,

    CurrencyFormatter,

    CurrencyFieldOptions,

    CurrencyFieldProps,

    CurrencyFieldProviderProps,

    CurrencyFieldState,

    CurrencyFieldConfiguration,

    CurrencyFieldActions,

    CurrencyFieldContextValue,

    CurrencyInputProps,

    CurrencyPrefixProps,

    CurrencySuffixProps,

} from "./CurrencyField.types";
