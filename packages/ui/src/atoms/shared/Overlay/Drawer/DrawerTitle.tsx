/**
 * ============================================================================
 * Ascend UI
 * Drawer Title
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

import { useDrawerContext } from "./DrawerContext";

export interface DrawerTitleProps
    extends HTMLAttributes<HTMLHeadingElement> {}

export const DrawerTitle = forwardRef<
    HTMLHeadingElement,
    DrawerTitleProps
>(
(
{
    className,
    ...props
},
ref,
) => {

    const {
        titleId,
    } = useDrawerContext();

    return (

        <h2
            ref={ref}
            id={titleId}
            className={cn(
                "text-lg font-semibold leading-none tracking-tight",
                className,
            )}
            {...props}
        />

    );

},
);

DrawerTitle.displayName = "DrawerTitle";

export default DrawerTitle;
