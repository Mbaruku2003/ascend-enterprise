/**
 * ============================================================================
 * Ascend UI
 * Presence Types
 * ============================================================================
 */

import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface PresenceProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;

    present: boolean;

    forceMount?: boolean;

    lazyMount?: boolean;

    /**
     * CSS class applied when entering.
     */
    enterClassName?: string;

    /**
     * CSS class applied when exiting.
     */
    exitClassName?: string;

    /**
     * Called after mounting.
     */
    onMount?(): void;

    /**
     * Called before exit.
     */
    onExit?(): void;

    /**
     * Called after exit animation.
     */
    onExitComplete?(): void;

    /**
     * Called after unmount.
     */
    onUnmount?(): void;
}
