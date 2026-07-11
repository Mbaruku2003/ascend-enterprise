/**
 * ============================================================================
 * Ascend UI
 * Popover Anchor
 * ============================================================================
 */

import {
    cloneElement,
    forwardRef,
    isValidElement,
    type ReactElement,
} from "react";

import { useMergedRefs } from "@/hooks";

import { usePopoverContext } from "./PopoverContext";

export interface PopoverAnchorProps {

    children: ReactElement;

}

export const PopoverAnchor =
forwardRef<
HTMLElement,
PopoverAnchorProps
>(
(
{
    children,
},
forwardedRef,
) => {

    const {

        anchorRef,

    } =
    usePopoverContext();

    const ref =
        useMergedRefs(

            forwardedRef,

            anchorRef,

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

        },

    );

},
);

PopoverAnchor.displayName =
"PopoverAnchor";

export default PopoverAnchor;
