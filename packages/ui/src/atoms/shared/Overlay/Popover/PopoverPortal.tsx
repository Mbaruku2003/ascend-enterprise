/**
 * ============================================================================
 * Ascend UI
 * Popover Portal
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

import Portal from "../Portal";

import Presence from "../../../../behavior/Presence";

import DismissableLayer from "../../../../behavior/DismissableLayer";

import { usePopoverContext } from "./PopoverContext";

export interface PopoverPortalProps {

    children: ReactNode;

}

export function PopoverPortal({

    children,

}: PopoverPortalProps) {

    const {

        open,

        portal,

        closePopover,

    } =
    usePopoverContext();

    const content = (

        <Presence
            present={open}
        >

            <DismissableLayer
                onDismiss={closePopover}
            >

                {children}

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

export default PopoverPortal;
