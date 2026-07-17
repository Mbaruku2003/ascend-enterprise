/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Hook
 * ============================================================================
 */

import {
    useMemo,
    useRef,
} from "react";

import {
    useControllableState,
} from "@/hooks";

import {
    DEFAULT_HOVERCARD_CLOSE_DELAY,
    DEFAULT_HOVERCARD_OPEN,
    DEFAULT_HOVERCARD_OPEN_DELAY,
} from "./HoverCard.constants";

import type {
    HoverCardRootProps,
} from "./HoverCard.types";

export function useHoverCard({

    open,

    defaultOpen =
        DEFAULT_HOVERCARD_OPEN,

    onOpenChange,

    openDelay =
        DEFAULT_HOVERCARD_OPEN_DELAY,

    closeDelay =
        DEFAULT_HOVERCARD_CLOSE_DELAY,

}: HoverCardRootProps) {

    const triggerRef =
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

    return useMemo(
        () => ({

            open:
                isOpen,

            setOpen,

            openDelay,

            closeDelay,

            triggerRef,

            contentRef,

            openCard() {

                setOpen(true);

            },

            closeCard() {

                setOpen(false);

            },

            toggleCard() {

                setOpen(

                    previous =>
                        !previous,

                );

            },

        }),
        [

            isOpen,

            setOpen,

            openDelay,

            closeDelay,

        ],
    );

}

export default useHoverCard;
