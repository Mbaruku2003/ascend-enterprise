/**
 * ============================================================================
 * Ascend Enterprise UI
 * Popover Content
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import {
    cn,
} from "@/utils";

import {
    useMergedRefs,
} from "@/hooks";

import {
    useFloatingPosition,
} from "@/atoms/shared/Overlay/positioning";

import {
    usePopoverContext,
} from "./PopoverContext";

export interface PopoverContentProps
    extends HTMLAttributes<HTMLDivElement> {}

export const PopoverContent = forwardRef<
    HTMLDivElement,
    PopoverContentProps
>(function PopoverContent(

    {
        className,
        style,
        children,
        ...props
    },

    forwardedRef,

) {

    const {

        anchorRef,

        contentRef,

        placement,

        offset,

    } = usePopoverContext();

    const ref =
        useMergedRefs(

            forwardedRef,

            contentRef,

        );

    const {

        style: floatingStyle,

    } = useFloatingPosition({

        anchorRef,

        floatingRef: contentRef,

        placement,

        offset,

    });

    return (

        <div

            ref={ref}

            role="dialog"

            className={cn(

                "z-50 min-w-[12rem] rounded-lg border bg-background shadow-lg outline-none",

                className,

            )}

            style={{

                ...floatingStyle,

                ...style,

            }}

            {...props}

        >

            {children}

        </div>

    );

});

PopoverContent.displayName =
    "PopoverContent";

export default PopoverContent;
