/**
 * ============================================================================
 * Ascend UI
 * Drawer Header
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface DrawerHeaderProps
    extends HTMLAttributes<HTMLDivElement> {}

export const DrawerHeader = forwardRef<
    HTMLDivElement,
    DrawerHeaderProps
>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col gap-2 border-b px-6 py-5",
                className,
            )}
            {...props}
        />
    ),
);

DrawerHeader.displayName = "DrawerHeader";

export default DrawerHeader;
