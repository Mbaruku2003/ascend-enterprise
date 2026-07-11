/**
 * ============================================================================
 * Ascend UI
 * Dialog Header
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface DialogHeaderProps
    extends HTMLAttributes<HTMLDivElement> {}

export const DialogHeader = forwardRef<
    HTMLDivElement,
    DialogHeaderProps
>(
    (
        {
            className,
            children,
            ...props
        },
        ref,
    ) => (
        <header
            ref={ref}
            className={cn(
                "flex flex-col gap-2 border-b border-border px-6 py-5",
                className,
            )}
            {...props}
        >
            {children}
        </header>
    ),
);

DialogHeader.displayName = "DialogHeader";

export default DialogHeader;
