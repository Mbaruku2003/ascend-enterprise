/**
 * ============================================================================
 * Ascend UI
 * Drawer Close
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    type MouseEvent,
    type ReactElement,
} from "react";

export interface DrawerCloseProps {

    children: ReactElement;

}

import { useDrawerContext } from "./DrawerContext";

export const DrawerClose = forwardRef<
    HTMLElement,
    DrawerCloseProps
>(
(
{
    children,
},
forwardedRef,
) => {

    const {

        closeDrawer,

    } =
    useDrawerContext();

    if (
        !isValidElement(children)
    ) {

        return null;

    }

    return cloneElement(

        children,

        {

            ref: forwardedRef,

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

                    closeDrawer();

                }

            },

        },

    );

},
);

DrawerClose.displayName =
    "DrawerClose";

export default DrawerClose;
