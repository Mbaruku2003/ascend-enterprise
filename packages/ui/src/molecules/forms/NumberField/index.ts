/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Public exports for the enterprise NumberField component.
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as NumberField,
} from "./NumberField";

export {
    NumberField,
} from "./NumberField";

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

export {
    default as NumberInput,
} from "./NumberInput";

export {
    NumberInput,
} from "./NumberInput";

export {
    default as NumberIncrement,
} from "./NumberIncrement";

export {
    NumberIncrement,
} from "./NumberIncrement";

export {
    default as NumberDecrement,
} from "./NumberDecrement";

export {
    NumberDecrement,
} from "./NumberDecrement";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export {
    default as NumberFieldProvider,
} from "./NumberFieldProvider";

export {
    NumberFieldProvider,
} from "./NumberFieldProvider";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as useNumberField,
} from "./useNumberField";

export {
    useNumberField,
} from "./useNumberField";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
    NumberParser,
    NumberFormatter,

    NumberFieldProps,
    NumberFieldProviderProps,
    NumberFieldContextValue,

    NumberInputProps,

    NumberIncrementProps,
    NumberDecrementProps,
    NumberControlsProps,

} from "./NumberField.types";
