/**
 * ============================================================================
 * Ascend UI
 * Drawer Footer
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface DrawerFooterProps
    extends HTMLAttributes<HTMLDivElement> {}

export const DrawerFooter = forwardRef<
    HTMLDivElement,
    DrawerFooterProps
>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex items-center justify-end gap-3 border-t px-6 py-4",
                className,
            )}
            {...props}
        />
    ),
);

DrawerFooter.displayName = "DrawerFooter";

export default DrawerFooter;
