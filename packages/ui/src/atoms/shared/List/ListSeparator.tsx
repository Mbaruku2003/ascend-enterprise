/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListSeparator.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListSeparatorProps
    extends HTMLAttributes<HTMLHRElement> {}

export const ListSeparator =
    forwardRef<
        HTMLHRElement,
        ListSeparatorProps
    >((props, ref) => (

        <hr

            {...props}

            ref={ref}

            role="separator"

        />

    ));

ListSeparator.displayName =
    "ListSeparator";

export default ListSeparator;
