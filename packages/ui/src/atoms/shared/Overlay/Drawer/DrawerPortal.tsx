/**
 * ============================================================================
 * Ascend UI
 * Drawer Portal
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

import Portal from "../Portal";

import Presence from "../../../../behavior/Presence";

import DismissableLayer from "../../../../behavior/DismissableLayer";

import FocusScope from "../../../../behavior/FocusScope";

import { useDrawerContext } from "./DrawerContext";

export interface DrawerPortalProps {

    children: ReactNode;

}

export function DrawerPortal({

    children,

}: DrawerPortalProps) {

    const {

        open,

        portal,

        closeDrawer,

    } = useDrawerContext();

    const content = (

        <Presence
            present={open}
        >

            <DismissableLayer
                onDismiss={closeDrawer}
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

export default DrawerPortal;
