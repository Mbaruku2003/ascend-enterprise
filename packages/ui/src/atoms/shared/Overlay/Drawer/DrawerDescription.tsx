/**
 * ============================================================================
 * Ascend UI
 * Drawer Description
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

import { useDrawerContext } from "./DrawerContext";

export interface DrawerDescriptionProps
    extends HTMLAttributes<HTMLParagraphElement> {}

export const DrawerDescription = forwardRef<
    HTMLParagraphElement,
    DrawerDescriptionProps
>(
(
{
    className,
    ...props
},
ref,
) => {

    const {
        descriptionId,
    } = useDrawerContext();

    return (

        <p
            ref={ref}
            id={descriptionId}
            className={cn(
                "text-sm text-muted-foreground",
                className,
            )}
            {...props}
        />

    );

},
);

DrawerDescription.displayName =
    "DrawerDescription";

export default DrawerDescription;
