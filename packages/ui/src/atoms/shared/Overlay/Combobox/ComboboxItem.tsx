/**
 * ============================================================================
 * Ascend Enterprise UI
 * Combobox
 * ----------------------------------------------------------------------------
 * File: ComboboxItem.tsx
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
    type MouseEvent,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import {
    ListItem,
} from "../../List";

import {
    useCombobox,
} from "./useCombobox";

export interface ComboboxItemProps
    extends HTMLAttributes<HTMLDivElement> {

    value: string;

    disabled?: boolean;

}

export const ComboboxItem =
    forwardRef<
        HTMLDivElement,
        ComboboxItemProps
    >(function ComboboxItem(

        {

            value,

            disabled = false,

            children,

            onClick,

            ...props

        },

        ref,

    ) {

        const {

            collection,

            value: selected,

            setValue,

            setOpen,

        } = useCombobox();

        useEffect(() => {

            collection.register({

                value,

                label: children,

                disabled,

            });

            return () => {

                collection.unregister(value);

            };

        }, [

            collection,

            value,

            children,

            disabled,

        ]);

        const selectedItem =
            selected === value;

        function handleClick(

            event: MouseEvent<HTMLDivElement>,

        ) {

            if (disabled) {

                return;

            }

            onClick?.(event);

            if (event.defaultPrevented) {

                return;

            }

            setValue(value);

            setOpen(false);

        }

        return (

            <ListItem

                ref={ref}

                selected={selectedItem}

                active={selectedItem}

                disabled={disabled}

                onClick={handleClick}

                {...props}

            >

                {children}

            </ListItem>

        );

    });

ComboboxItem.displayName =
    "ComboboxItem";

export default ComboboxItem;
