/**
 * ============================================================================
 * Ascend UI
 * Dialog Overlay
 * ============================================================================
 */

import { forwardRef } from "react";

import Overlay from "../Overlay";

export interface DialogOverlayProps {

    blur?: boolean;

    invisible?: boolean;

}

export const DialogOverlay =
forwardRef<
HTMLDivElement,
DialogOverlayProps
>(
(
{
blur = true,
invisible = false,
},
ref,
) => {

return (

<Overlay
ref={ref}
blur={blur}
invisible={invisible}
/>

);

},
);

DialogOverlay.displayName =
"DialogOverlay";

export default DialogOverlay;
