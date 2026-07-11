/**
 * ============================================================================
 * Ascend UI
 * Dialog Body
 * ============================================================================
 */

import {
    forwardRef,
    type HTMLAttributes,
} from "react";

import ScrollArea from "../../display/ScrollArea";
import { cn } from "@/utils";

export interface DialogBodyProps
    extends HTMLAttributes<HTMLDivElement> {

    scrollable?: boolean;

    maxHeight?: string;
}

export const DialogBody = forwardRef<
    HTMLDivElement,
    DialogBodyProps
>(
    (
        {
            className,
            children,
            scrollable = true,
            maxHeight = "70vh",
            style,
            ...props
        },
        ref,
    ) => {

        if (!scrollable) {
            return (
                <div
                    ref={ref}
                    className={cn(
                        "px-6 py-5",
                        className,
                    )}
                    style={style}
                    {...props}
                >
                    {children}
                </div>
            );
        }

        return (
            <ScrollArea
                ref={ref}
                className={cn(
                    "px-6 py-5",
                    className,
                )}
                style={{
                    maxHeight,
                    ...style,
                }}
                {...props}
            >
                {children}
            </ScrollArea>
        );
    },
);

DialogBody.displayName = "DialogBody";

export default DialogBody;
