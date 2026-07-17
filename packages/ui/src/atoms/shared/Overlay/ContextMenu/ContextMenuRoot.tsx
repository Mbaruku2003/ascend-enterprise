/**
 * ============================================================================
 * Ascend Enterprise UI
 * ContextMenu Root
 * ============================================================================
 */

import MenuRoot from "../Menu/MenuRoot";

import type {
    ContextMenuRootProps,
} from "./ContextMenu.types";

export function ContextMenuRoot(
    props: ContextMenuRootProps,
) {

    return <MenuRoot {...props} />;

}

export default ContextMenuRoot;
