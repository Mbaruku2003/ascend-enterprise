/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectItem.tsx
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {

    cn,

} from "@/utils";

import {

    useSelect,

} from "./useSelect";

import {
    useEffect,
} from "react";

export interface SelectItemProps
extends HTMLAttributes<HTMLDivElement> {

    value: string;

    disabled?: boolean;

}

export const SelectItem =
forwardRef<
HTMLDivElement,
SelectItemProps
>(

function SelectItem(

{

    value,

    disabled = false,

    className,

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

    } = useSelect();
useEffect(() => {

    collection.register({

        value,

        label: children,

        disabled,

    });

    return () => {

        collection.unregister(

            value,

        );

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

        event: React.MouseEvent<HTMLDivElement>,

    ) {

        if (disabled) {

            return;

        }

        onClick?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        setValue(value);

        setOpen(false);

    }

    return (

        <div

            ref={ref}

            role="option"

            aria-selected={
                selectedItem
            }

            data-selected={
                selectedItem
                    ? ""
                    : undefined
            }

            data-disabled={
                disabled
                    ? ""
                    : undefined
            }

            className={cn(

                "flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm outline-none",

                "hover:bg-accent hover:text-accent-foreground",

                selectedItem &&
                    "bg-accent font-medium",

                disabled &&
                    "pointer-events-none opacity-50",

                className,

            )}

            onClick={handleClick}

            {...props}

        >

            {children}

        </div>

    );

},

);

SelectItem.displayName =
    "SelectItem";

export default SelectItem;
