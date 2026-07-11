/**
 * ============================================================================
 * Ascend UI
 * Dialog Footer
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import { cn } from "@/utils";

export interface DialogFooterProps
    extends HTMLAttributes<HTMLDivElement> {

    justify?:
        | "start"
        | "center"
        | "end"
        | "between";
}

const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
};

export const DialogFooter = forwardRef<
    HTMLDivElement,
    DialogFooterProps
>(
    (
        {
            className,
            children,
            justify = "end",
            ...props
        },
        ref,
    ) => (
        <footer
            ref={ref}
            className={cn(
                "flex flex-wrap items-center gap-3 border-t border-border px-6 py-5",
                justifyClasses[justify],
                className,
            )}
            {...props}
        >
            {children}
        </footer>
    ),
);

DialogFooter.displayName = "DialogFooter";

export default DialogFooter;
