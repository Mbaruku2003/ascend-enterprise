/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInputSlot.tsx
 *
 * Individual OTP input slot.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    ChangeEvent,
    ClipboardEvent,
    FocusEvent,
    KeyboardEvent,
} from "react";

import {
    Input,
} from "@/atoms/forms/Input";

import {
    composeRefs,
    cn,
} from "@/utils";

import {
    useOTPInput,
} from "./useOTPInput";

import type {
    OTPInputSlotProps,
} from "./OTPInput.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const OTPInputSlot =
forwardRef<
HTMLInputElement,
OTPInputSlotProps
>(

function OTPInputSlot(

{

    index,

    className,

    onFocus,

    onBlur,

    onChange,

    onKeyDown,

    onPaste,

    disabled,

    readOnly,

    ...props

},

forwardedRef,

) {

    const {

        value,

        activeIndex,

        inputRefs,

        password,

        autoFocus,

        clearOnFocus,

        disabled: contextDisabled,

        readOnly: contextReadOnly,

        setActiveIndex,

        setCharacter,

        clearCharacter,

        focus,

        focusNext,

        focusPrevious,

        paste,

    } = useOTPInput();

    const isDisabled =

        disabled ||

        contextDisabled;

    const isReadOnly =

        readOnly ||

        contextReadOnly;

    /* ---------------------------------------------------------------------- */
    /* Events                                                                 */
    /* ---------------------------------------------------------------------- */

    function handleFocus(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onFocus?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setActiveIndex(

            index,

        );

        if (

            clearOnFocus &&

            !isReadOnly

        ) {

            clearCharacter(

                index,

            );

        }

    }

    function handleBlur(

        event: FocusEvent<HTMLInputElement>,

    ) {

        onBlur?.(event);

    }

    function handleChange(

        event: ChangeEvent<HTMLInputElement>,

    ) {

        onChange?.(event);

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        const character =
            event.target.value;

        if (

            character.length === 0

        ) {

            clearCharacter(

                index,

            );

            return;

        }

        setCharacter(

            index,

            character,

        );

    }

    function handleKeyDown(

        event: KeyboardEvent<HTMLInputElement>,

    ) {

        onKeyDown?.(event);

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        switch (

            event.key

        ) {

            case "ArrowLeft":

                event.preventDefault();

                focusPrevious();

                break;

            case "ArrowRight":

                event.preventDefault();

                focusNext();

                break;

            case "Backspace":

                if (

                    value[index]

                ) {

                    clearCharacter(

                        index,

                    );

                }

                else {

                    focusPrevious();

                }

                break;

            case "Delete":

                clearCharacter(

                    index,

                );

                break;

            case "Home":

                event.preventDefault();

                focus(0);

                break;

            case "End":

                event.preventDefault();

                focus(

                    value.length - 1,

                );

                break;

            default:

                break;

        }

    }

    function handlePaste(

        event: ClipboardEvent<HTMLInputElement>,

    ) {

        onPaste?.(event);

        if (

            event.defaultPrevented ||

            isDisabled ||

            isReadOnly

        ) {

            return;

        }

        event.preventDefault();

        paste(

            event.clipboardData.getData(

                "text",

            ),

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Render                                                                 */
    /* ---------------------------------------------------------------------- */

    return (

        <Input

            {...props}

            ref={composeRefs(

                forwardedRef,

                inputRefs[index],

            )}

            type={

                password

                    ? "password"

                    : "text"

            }

            inputMode="numeric"

            autoComplete={

                index === 0

                    ? "one-time-code"

                    : "off"

            }

            autoFocus={

                autoFocus &&

                index === 0

            }

            spellCheck={false}

            maxLength={1}

            value={

                value[index]

            }

            disabled={isDisabled}

            readOnly={isReadOnly}

            aria-label={`OTP digit ${index + 1}`}

            aria-current={

                activeIndex === index

                    ? "step"

                    : undefined

            }

            className={cn(

                "h-12",

                "w-12",

                "text-center",

                "text-lg",

                "font-semibold",

                className,

            )}

            onFocus={handleFocus}

            onBlur={handleBlur}

            onChange={handleChange}

            onKeyDown={handleKeyDown}

            onPaste={handlePaste}

        />

    );

},

);

OTPInputSlot.displayName =
    "OTPInputSlot";

export default OTPInputSlot;
