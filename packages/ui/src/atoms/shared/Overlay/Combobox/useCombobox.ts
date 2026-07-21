/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: useCombobox.ts
 *
 * Public hook for accessing the Combobox context.
 *
 * ============================================================================
 */

import {
    useMemo,
} from "react";

import {
    useComboboxContext,
} from "./ComboboxContext";

/* -------------------------------------------------------------------------- */
/* Hook                                                                       */
/* -------------------------------------------------------------------------- */

export function useCombobox() {

    const context =
        useComboboxContext();

    return useMemo(

        () => ({

            /* -------------------------------------------------------------- */
            /* Value                                                          */
            /* -------------------------------------------------------------- */

            value:
                context.value,

            setValue:
                context.setValue,

            /* -------------------------------------------------------------- */
            /* Query                                                          */
            /* -------------------------------------------------------------- */

            query:
                context.query,

            setQuery:
                context.setQuery,

            /* -------------------------------------------------------------- */
            /* Overlay                                                        */
            /* -------------------------------------------------------------- */

            open:
                context.open,

            setOpen:
                context.setOpen,

            /* -------------------------------------------------------------- */
            /* Refs                                                           */
            /* -------------------------------------------------------------- */

            triggerRef:
                context.triggerRef,

            inputRef:
                context.inputRef,

            contentRef:
                context.contentRef,

            /* -------------------------------------------------------------- */
            /* Floating                                                       */
            /* -------------------------------------------------------------- */

            placement:
                context.placement,

            offset:
                context.offset,

            portal:
                context.portal,

            /* -------------------------------------------------------------- */
            /* State                                                          */
            /* -------------------------------------------------------------- */

            disabled:
                context.disabled,

            readOnly:
                context.readOnly,

            filterMode:
                context.filterMode,

            /* -------------------------------------------------------------- */
            /* Collection                                                     */
            /* -------------------------------------------------------------- */

            collection:
                context.collection,

        }),

        [

            context,

        ],

    );

}

export default useCombobox;
