/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip Hook
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
    DEFAULT_TOOLTIP_CLOSE_DELAY,
    DEFAULT_TOOLTIP_DELAY,
    DEFAULT_TOOLTIP_OPEN,
} from "./Tooltip.constants";

import type {
    TooltipRootProps,
} from "./Tooltip.types";

export function useTooltip({

    open,

    defaultOpen =
        DEFAULT_TOOLTIP_OPEN,

    onOpenChange,

    delay =
        DEFAULT_TOOLTIP_DELAY,

    closeDelay =
        DEFAULT_TOOLTIP_CLOSE_DELAY,

}: TooltipRootProps) {

    const triggerRef =
        useRef<HTMLElement>(null);

    const contentRef =
        useRef<HTMLDivElement>(null);

    const [

        isOpen,

        setOpen,

    ] =
    useControllableState({

        value:
            open,

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

            delay,

            closeDelay,

            triggerRef,

            contentRef,

            openTooltip() {

                setOpen(true);

            },

            closeTooltip() {

                setOpen(false);

            },

            toggleTooltip() {

                setOpen(
                    previous =>
                        !previous,
                );

            },

        }),
        [

            isOpen,

            setOpen,

            delay,

            closeDelay,

        ],
    );

}

export default useTooltip;
