/**
 * ============================================================================
 * Ascend Enterprise UI
 * HoverCard Trigger
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useRef,
    type HTMLAttributes,
    type MouseEvent,
    type FocusEvent,
    type ReactElement,
} from "react";

import {
    composeRefs,
    mergeProps,
} from "@/utils";

import {
    useHoverCardContext,
} from "./HoverCardContext";

export interface HoverCardTriggerProps
extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

export const HoverCardTrigger =
forwardRef<
HTMLElement,
HoverCardTriggerProps
>(

function HoverCardTrigger(

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

        openDelay,

        closeDelay,

        triggerRef,

        openCard,

        closeCard,

    } =
    useHoverCardContext();

    const openTimer =
        useRef<number>();

    const closeTimer =
        useRef<number>();

    useEffect(() => {

        return () => {

            window.clearTimeout(openTimer.current);
            window.clearTimeout(closeTimer.current);

        };

    }, []);

    function handleEnter(
        event: MouseEvent<HTMLElement>,
    ) {

        onMouseEnter?.(event);

        window.clearTimeout(closeTimer.current);

        openTimer.current =
            window.setTimeout(

                openCard,

                openDelay,

            );

    }

    function handleLeave(
        event: MouseEvent<HTMLElement>,
    ) {

        onMouseLeave?.(event);

        window.clearTimeout(openTimer.current);

        closeTimer.current =
            window.setTimeout(

                closeCard,

                closeDelay,

            );

    }

    function handleFocus(
        event: FocusEvent<HTMLElement>,
    ) {

        onFocus?.(event);

        openCard();

    }

    function handleBlur(
        event: FocusEvent<HTMLElement>,
    ) {

        onBlur?.(event);

        closeCard();

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

                "data-state":
                    open
                        ? "open"
                        : "closed",

                onMouseEnter: handleEnter,

                onMouseLeave: handleLeave,

                onFocus: handleFocus,

                onBlur: handleBlur,

            },

        );

    if (

        asChild &&

        isValidElement(children)

    ) {

        return cloneElement(

            children as ReactElement,

            triggerProps,

        );

    }

    return (

        <span {...triggerProps}>

            {children}

        </span>

    );

});

HoverCardTrigger.displayName =
"HoverCardTrigger";

export default HoverCardTrigger;
