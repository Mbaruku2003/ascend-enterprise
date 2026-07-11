/**
 * ============================================================================
 * Ascend UI
 * Drawer Trigger
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    type MouseEvent,
    type ReactElement,
} from "react";

import { useMergedRefs } from "@/hooks";

import { useDrawerContext } from "./DrawerContext";

export interface DrawerTriggerProps {

    children: ReactElement;

}

export const DrawerTrigger = forwardRef<
    HTMLElement,
    DrawerTriggerProps
>(
(
{
    children,
},
forwardedRef,
) => {

    const {

        openDrawer,

        triggerRef,

    } =
    useDrawerContext();

    const ref =
        useMergedRefs(
            forwardedRef,
            triggerRef,
        );

    if (
        !isValidElement(children)
    ) {

        return null;

    }

    return cloneElement(

        children,

        {

            ref,

            "aria-haspopup": "dialog",

            "aria-expanded": false,

            onClick(
                event: MouseEvent,
            ) {

                children.props
                    .onClick?.(
                        event,
                    );

                if (
                    !event.defaultPrevented
                ) {

                    openDrawer();

                }

            },

        },

    );

},
);

DrawerTrigger.displayName =
    "DrawerTrigger";

export default DrawerTrigger;
