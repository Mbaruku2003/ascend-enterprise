/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: useSelect.ts
 *
 * Public hook for Select.
 *
 * ============================================================================
 */

import {
    useSelectContext,
} from "./SelectContext";

export function useSelect() {

    return useSelectContext();

}

export default useSelect;
