/**
 * ============================================================================
 * Ascend UI
 * Drawer Overlay
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import Overlay from "../Overlay";

import type {
    OverlayProps,
} from "../Overlay";

export interface DrawerOverlayProps
extends OverlayProps {}

export const DrawerOverlay =
forwardRef<
HTMLDivElement,
DrawerOverlayProps
>(

(
props,
ref,
) => (

<Overlay
ref={ref}
{...props}
/>

),

);

DrawerOverlay.displayName =
"DrawerOverlay";

export default DrawerOverlay;
