/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: ComboboxInput.tsx
 * ============================================================================
 */

import {
    forwardRef,
    useCallback,
} from "react";

import type {
    ChangeEvent,
    InputHTMLAttributes,
} from "react";

import {
    useCombobox,
} from "./useCombobox";

export interface ComboboxInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "value"
    > {}

export const ComboboxInput =
    forwardRef<
        HTMLInputElement,
        ComboboxInputProps
    >((props, forwardedRef) => {

        const {

            query,

            setQuery,

            open,

            setOpen,

            disabled,

            readOnly,

            inputRef,

        } = useCombobox();

        const handleChange =
            useCallback(

                (
                    event: ChangeEvent<HTMLInputElement>,
                ) => {

                    setQuery(
                        event.target.value,
                    );

                    if (!open) {

                        setOpen(true);

                    }

                    props.onChange?.(
                        event,
                    );

                },

                [

                    open,

                    props,

                    setOpen,

                    setQuery,

                ],

            );

        return (

            <input

                {...props}

                ref={(node) => {

                    inputRef.current =
                        node;

                    if (

                        typeof forwardedRef ===
                        "function"

                    ) {

                        forwardedRef(node);

                    } else if (

                        forwardedRef

                    ) {

                        forwardedRef.current =
                            node;

                    }

                }}

                value={query}

                disabled={disabled}

                readOnly={readOnly}

                autoComplete="off"

                role="combobox"

                aria-expanded={open}

                onChange={handleChange}

            />

        );

    });

ComboboxInput.displayName =
    "ComboboxInput";

export default ComboboxInput;
