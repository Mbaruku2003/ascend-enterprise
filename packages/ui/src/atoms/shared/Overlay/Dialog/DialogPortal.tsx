/**
 * ============================================================================
 * Ascend UI
 * Dialog Portal
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

import Portal from "../Portal";

import Presence from "@/behavior/Presence";

import DismissableLayer from "@/behavior/DismissableLayer";

import FocusScope from "@/behavior/FocusScope";

import { useDialogContext } from "./DialogContext";

export interface DialogPortalProps {

    children: ReactNode;

}

export function DialogPortal({

    children,

}: DialogPortalProps) {

    const {

        open,

        portal,

        closeDialog,

    } =
    useDialogContext();

    const content = (

        <Presence
            present={open}
        >

            <DismissableLayer
                onDismiss={closeDialog}
            >

                <FocusScope
                    trapped
                    autoFocus
                    restoreFocus
                >

                    {children}

                </FocusScope>

            </DismissableLayer>

        </Presence>

    );

    if (!portal) {

        return content;

    }

    return (

        <Portal>

            {content}

        </Portal>

    );

}

export default DialogPortal;
