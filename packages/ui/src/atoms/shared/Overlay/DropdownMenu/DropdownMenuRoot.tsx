/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * DropdownMenu Root
 * ============================================================================
 */

import MenuRoot from "../../Navigation/Menu/MenuRoot";

import type {
    DropdownMenuRootProps,
} from "./DropdownMenu.types";

export function DropdownMenuRoot(
    props: DropdownMenuRootProps,
) {

    return (

        <MenuRoot {...props} />

    );

}

DropdownMenuRoot.displayName =
    "DropdownMenuRoot";

export default DropdownMenuRoot;
