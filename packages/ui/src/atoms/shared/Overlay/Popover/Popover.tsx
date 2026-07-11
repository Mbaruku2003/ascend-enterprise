/**
 * ============================================================================
 * Ascend UI
 * Popover
 * ============================================================================
 */

import {
    useMemo,
    useRef,
} from "react";

import {
    useControllableState,
} from "@/hooks";

import PopoverContext from "./PopoverContext";

import {
    DEFAULT_POPOVER_OPEN,
    DEFAULT_POPOVER_OFFSET,
    DEFAULT_POPOVER_PLACEMENT,
    DEFAULT_POPOVER_PORTAL,
} from "./popover.constants";

import type {
    PopoverProps,
} from "./Popover.types";

export function Popover({

    children,

    open,

    defaultOpen =
        DEFAULT_POPOVER_OPEN,

    onOpenChange,

    portal =
        DEFAULT_POPOVER_PORTAL,

    placement =
        DEFAULT_POPOVER_PLACEMENT,

    offset =
        DEFAULT_POPOVER_OFFSET,

}: PopoverProps) {

    const triggerRef =
        useRef<HTMLElement>(null);

    const anchorRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const [
        isOpen,
        setOpen,
    ] =
    useControllableState({

        value: open,

        defaultValue:
            defaultOpen,

        onChange:
            onOpenChange,

    });

    const value =
        useMemo(
            () => ({

                open: isOpen,

                setOpen,

                portal,

                placement,

                offset,

                triggerRef,

                anchorRef,

                contentRef,

                openPopover() {

                    setOpen(true);

                },

                closePopover() {

                    setOpen(false);

                },

                togglePopover() {

                    setOpen(
                        previous =>
                            !previous,
                    );

                },

            }),
            [

                isOpen,

                setOpen,

                portal,

                placement,

                offset,

            ],
        );

    return (

        <PopoverContext.Provider
            value={value}
        >

            {children}

        </PopoverContext.Provider>

    );

}

export default Popover;
