/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: ComboboxTrigger.tsx
 * ============================================================================
 */

import {
    forwardRef,
    useCallback,
} from "react";

import type {
    ButtonHTMLAttributes,
} from "react";

import {
    useCombobox,
} from "./useCombobox";

export interface ComboboxTriggerProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ComboboxTrigger =
    forwardRef<
        HTMLButtonElement,
        ComboboxTriggerProps
    >((props, ref) => {

        const {

            open,

            setOpen,

            disabled,

        } = useCombobox();

        const handleClick =
            useCallback(() => {

                setOpen(
                    !open,
                );

            }, [

                open,

                setOpen,

            ]);

        return (

            <button

                {...props}

                ref={ref}

                disabled={disabled}

                type="button"

                aria-haspopup="listbox"

                aria-expanded={open}

                onClick={handleClick}

            >

                {props.children}

            </button>

        );

    });

ComboboxTrigger.displayName =
    "ComboboxTrigger";

export default ComboboxTrigger;
