/**
 * ============================================================================
 * Ascend Enterprise UI
 * Tooltip
 * ----------------------------------------------------------------------------
 * File: TooltipTrigger.tsx
 *
 * Trigger element for Tooltip.
 *
 * Responsibilities:
 *
 * • Hover handling
 * • Focus accessibility
 * • Delay timers
 * • Context integration
 *
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useRef,
    type FocusEvent,
    type HTMLAttributes,
    type MouseEvent,
    type ReactElement,
} from "react";

import {
    composeRefs,
    mergeProps,
} from "@/utils";

import {
    useTooltipContext,
} from "./TooltipContext";

export interface TooltipTriggerProps
    extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

export const TooltipTrigger =
forwardRef<
HTMLElement,
TooltipTriggerProps
>(

function TooltipTrigger(

{

    asChild = false,

    children,

    onMouseEnter,

    onMouseLeave,

    onFocus,

    onBlur,

    ...props

},

forwardedRef,

) {

    const {

        open,

        delay,

        closeDelay,

        triggerRef,

        openTooltip,

        closeTooltip,

    } =
    useTooltipContext();

    const openTimer =
        useRef<number>();

    const closeTimer =
        useRef<number>();

    useEffect(() => {

        return () => {

            window.clearTimeout(
                openTimer.current,
            );

            window.clearTimeout(
                closeTimer.current,
            );

        };

    }, []);

    function handleMouseEnter(
        event: MouseEvent<HTMLElement>,
    ) {

        onMouseEnter?.(event);

        if (event.defaultPrevented) {

            return;

        }

        window.clearTimeout(
            closeTimer.current,
        );

        openTimer.current =
            window.setTimeout(

                openTooltip,

                delay,

            );

    }

    function handleMouseLeave(
        event: MouseEvent<HTMLElement>,
    ) {

        onMouseLeave?.(event);

        if (event.defaultPrevented) {

            return;

        }

        window.clearTimeout(
            openTimer.current,
        );

        closeTimer.current =
            window.setTimeout(

                closeTooltip,

                closeDelay,

            );

    }

    function handleFocus(
        event: FocusEvent<HTMLElement>,
    ) {

        onFocus?.(event);

        if (
            event.defaultPrevented
        ) {

            return;

        }

        openTooltip();

    }

    function handleBlur(
        event: FocusEvent<HTMLElement>,
    ) {

        onBlur?.(event);

        if (
            event.defaultPrevented
        ) {

            return;

        }

        closeTooltip();

    }

    const triggerProps =
        mergeProps(

            props,

            {

                ref: composeRefs(

                    forwardedRef,

                    triggerRef,

                ),

                tabIndex: 0,

                "aria-describedby":
                    open
                        ? "tooltip"
                        : undefined,

                "data-state":
                    open
                        ? "open"
                        : "closed",

                onMouseEnter:
                    handleMouseEnter,

                onMouseLeave:
                    handleMouseLeave,

                onFocus:
                    handleFocus,

                onBlur:
                    handleBlur,

            },

        );

    if (

        asChild &&

        isValidElement(
            children,
        )

    ) {

        return cloneElement(

            children as ReactElement,

            triggerProps,

        );

    }

    return (

        <span
            {...triggerProps}
        >

            {children}

        </span>

    );

});

TooltipTrigger.displayName =
    "TooltipTrigger";

export default TooltipTrigger;
