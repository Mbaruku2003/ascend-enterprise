/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
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
    default as OTPInput,
} from "./OTPInput";

export {
    default as OTPInputGroup,
} from "./OTPInputGroup";

export {
    default as OTPInputSlot,
} from "./OTPInputSlot";

export {
    default as OTPInputSeparator,
} from "./OTPInputSeparator";

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export {
    default as OTPInputProvider,
} from "./OTPInputProvider";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export {
    default as useOTPInput,
} from "./useOTPInput";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {

    OTPInputMode,

    OTPValue,

    OTPInputOptions,

    OTPInputProps,

    OTPInputProviderProps,

    OTPInputState,

    OTPInputConfiguration,

    OTPInputActions,

    OTPInputContextValue,

    OTPInputGroupProps,

    OTPInputSlotProps,

    OTPInputSeparatorProps,

} from "./OTPInput.types";
