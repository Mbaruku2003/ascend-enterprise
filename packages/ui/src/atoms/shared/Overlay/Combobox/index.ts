/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Public exports for the Combobox overlay package.
 *
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

export {
    default as ComboboxRoot,
} from "./ComboboxRoot";

export {
    default as ComboboxTrigger,
} from "./ComboboxTrigger";

export {
    default as ComboboxInput,
} from "./ComboboxInput";

export {
    default as ComboboxContent,
} from "./ComboboxContent";

export {
    default as ComboboxItem,
} from "./ComboboxItem";

/* -------------------------------------------------------------------------- */
/* Hooks                                                                      */
/* -------------------------------------------------------------------------- */

export {
    useCombobox,
} from "./useCombobox";

export {
    useComboboxFilter,
} from "./useComboboxFilter";

export {
    useComboboxKeyboard,
} from "./useComboboxKeyboard";

export {
    useComboboxTypeahead,
} from "./useComboboxTypeahead";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export {
    ComboboxContext,
    useComboboxContext,
} from "./ComboboxContext";

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

export {
    createComboboxMatcher,
    normalizeComboboxValue,
} from "./Combobox.utils";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
    ComboboxOption,
    ComboboxFilterMode,
    ComboboxRootProps,
    ComboboxContextValue,
    ComboboxOwnerState,
} from "./Combobox.types";
