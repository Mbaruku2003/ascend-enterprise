/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandDialog.tsx
 *
 * Modal wrapper for the Command Palette.
 *
 * Integrates the Command runtime with the shared Overlay/Dialog system.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    cn,
} from "@/utils";

import {

    Dialog,

    DialogContent,

} from "../../shared/Overlay";

import {

    useCommand,

} from "./useCommand";

import type {

    CommandDialogProps,

} from "./Command.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const CommandDialog =
forwardRef<
    HTMLDivElement,
    CommandDialogProps
>(

function CommandDialog(

{

    className,

    children,

    ...props

},

ref,

) {

    const {

        open,

        setOpen,

    } = useCommand();

    return (

        <Dialog

            open={open}

            onOpenChange={

                setOpen

            }

        >

            <DialogContent

                ref={ref}

                className={cn(

                    "overflow-hidden",

                    "rounded-xl",

                    "border",

                    "bg-background",

                    "p-0",

                    "shadow-2xl",

                    "sm:max-w-2xl",

                    className,

                )}

                {...props}

            >

                {children}

            </DialogContent>

        </Dialog>

    );

},

);

CommandDialog.displayName =
    "CommandDialog";

export default CommandDialog;
