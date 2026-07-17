/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: MenuTrigger.tsx
 *
 * Trigger component for MenuRoot.
 *
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    type HTMLAttributes,
    type MouseEvent,
    type KeyboardEvent,
    type ReactElement,
} from "react";

import {
    composeRefs,
    mergeProps,
} from "@/utils";

import {
    useMenuContext,
} from "./MenuContext";

export interface MenuTriggerProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Render child directly.
     */
    asChild?: boolean;

}

export const MenuTrigger = forwardRef<
    HTMLElement,
    MenuTriggerProps
>(function MenuTrigger(

    {

        asChild = false,

        children,

        onClick,

        onKeyDown,

        ...props

    },

    forwardedRef,

) {

    const {

        open,

        triggerRef,

        toggleMenu,

    } = useMenuContext();

    const ref =
        composeRefs(

            forwardedRef,

            triggerRef,

        );

    function handleClick(
        event: MouseEvent<HTMLElement>,
    ) {

        onClick?.(event);

        if (
            event.defaultPrevented
        ) {

            return;

        }

        toggleMenu();

    }

    function handleKeyDown(
        event: KeyboardEvent<HTMLElement>,
    ) {

        onKeyDown?.(event);

        if (
            event.defaultPrevented
        ) {

            return;

        }

        switch (event.key) {

            case "Enter":

            case " ":

            case "ArrowDown":

                event.preventDefault();

                toggleMenu();

                break;

        }

    }

    const triggerProps = mergeProps(

        props,

        {

            ref,

            role: "button",

            tabIndex: 0,

            "aria-haspopup": "menu",

            "aria-expanded": open,

            "data-state":
                open
                    ? "open"
                    : "closed",

            onClick: handleClick,

            onKeyDown: handleKeyDown,

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

        <button

            type="button"

            {...triggerProps}

        >

            {children}

        </button>

    );

});

MenuTrigger.displayName =
    "MenuTrigger";

export default MenuTrigger;
