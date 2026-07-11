/**
 * ============================================================================
 * Ascend UI
 * Drawer Body
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface DrawerBodyProps
    extends HTMLAttributes<HTMLDivElement> {}

export const DrawerBody = forwardRef<
    HTMLDivElement,
    DrawerBodyProps
>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex-1 overflow-auto px-6 py-4",
                className,
            )}
            {...props}
        />
    ),
);

DrawerBody.displayName = "DrawerBody";

export default DrawerBody;
