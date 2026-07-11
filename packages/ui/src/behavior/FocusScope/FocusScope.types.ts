import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export interface FocusScopeProps
    extends HTMLAttributes<HTMLDivElement> {

    children: ReactNode;

    /**
     * Automatically focus the first tabbable element
     * when mounted.
     */
    autoFocus?: boolean;

    /**
     * Trap focus inside the scope.
     */
    trapped?: boolean;

    /**
     * Restore focus when unmounted.
     */
    restoreFocus?: boolean;

    /**
     * Callback fired after auto focus.
     */
    onMountAutoFocus?(): void;

    /**
     * Callback fired before restoring focus.
     */
    onUnmountAutoFocus?(): void;
}
