/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: ContextMenuTrigger.tsx
 *
 * Opens the ContextMenu using:
 *
 * • Right Mouse Button
 * • Keyboard Context Menu Key
 * • Shift + F10
 *
 * Touch long-press support can be added later.
 *
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    type KeyboardEvent,
    type MouseEvent,
    type ReactElement,
} from "react";

import {
    composeRefs,
    mergeProps,
} from "@/utils";

import {
    useMenuContext,
} from "../Menu/MenuContext";

import type {
    ContextMenuTriggerProps,
} from "./ContextMenu.types";

export const ContextMenuTrigger =
forwardRef<
HTMLElement,
ContextMenuTriggerProps
>(

function ContextMenuTrigger(

{

    asChild = false,

    children,

    onContextMenu,

    onKeyDown,

    ...props

},

forwardedRef,

) {

    const {

        triggerRef,

        openMenu,

        setAnchorPoint,

    } =
    useMenuContext();

    function handleContextMenu(

        event: MouseEvent<HTMLElement>,

    ) {

        onContextMenu?.(event);

        if (

            event.defaultPrevented

        ) {

            return;

        }

        event.preventDefault();

        setAnchorPoint({

            x: event.clientX,

            y: event.clientY,

        });

        openMenu();

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

        const isContextKey =

            event.key === "ContextMenu";

        const isShiftF10 =

            event.shiftKey &&
            event.key === "F10";

        if (

            !isContextKey &&
            !isShiftF10

        ) {

            return;

        }

        event.preventDefault();

        const rect =
            triggerRef.current?.getBoundingClientRect();

        setAnchorPoint({

            x: rect?.left ?? 0,

            y: rect?.bottom ?? 0,

        });

        openMenu();

    }

    const triggerProps =
        mergeProps(

            props,

            {

                ref: composeRefs(

                    forwardedRef,

                    triggerRef,

                ),

                onContextMenu:
                    handleContextMenu,

                onKeyDown:
                    handleKeyDown,

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

        <div {...triggerProps}>

            {children}

        </div>

    );

},

);

ContextMenuTrigger.displayName =
    "ContextMenuTrigger";

export default ContextMenuTrigger;
