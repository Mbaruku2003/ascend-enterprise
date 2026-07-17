/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectRoot.tsx
 *
 * Root provider for Select.
 *
 * ============================================================================
 */

import {
    useMemo,
    useRef,
} from "react";

import {
    useControllableState,
} from "@/hooks";

import SelectContext from "./SelectContext";

import {
    SelectCollection,
} from "./SelectCollection";

import {

    DEFAULT_SELECT_DISABLED,
    DEFAULT_SELECT_OFFSET,
    DEFAULT_SELECT_OPEN,
    DEFAULT_SELECT_PLACEMENT,
    DEFAULT_SELECT_PORTAL,

} from "./Select.constants";

import type {

    SelectProps,

} from "./Select.types";

export function SelectRoot({

    children,

    value,

    defaultValue,

    onValueChange,

    open,

    defaultOpen = DEFAULT_SELECT_OPEN,

    onOpenChange,

    placement = DEFAULT_SELECT_PLACEMENT,

    offset = DEFAULT_SELECT_OFFSET,

    portal = DEFAULT_SELECT_PORTAL,

    disabled = DEFAULT_SELECT_DISABLED,

}: SelectProps) {

    const triggerRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const [

        selectedValue,

        setSelectedValue,

    ] = useControllableState({

        value,

        defaultValue,

        onChange: onValueChange,

    });

    const collection =
        useMemo(
            () =>
                new SelectCollection(),
            [],
        );

    const [

        isOpen,

        setOpen,

    ] = useControllableState({

        value: open,

        defaultValue: defaultOpen,

        onChange: onOpenChange,

    });

    const context =
        useMemo(
            () => ({

                value:
                    selectedValue,

                setValue:
                    setSelectedValue,

                open:
                    isOpen,

                setOpen,

                triggerRef,

                contentRef,

                placement,

                offset,

                portal,

                disabled,

                collection,
            }),
            [

                selectedValue,

                setSelectedValue,

                isOpen,

                setOpen,

                placement,

                offset,

                portal,

                disabled,

                collection,
            ],
        );

    return (

        <SelectContext.Provider
            value={context}
        >

            {children}

        </SelectContext.Provider>

    );

}

export default SelectRoot;
