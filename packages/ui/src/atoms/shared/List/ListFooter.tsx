/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListFooter.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListFooterProps
    extends HTMLAttributes<HTMLDivElement> {}

export const ListFooter =
    forwardRef<
        HTMLDivElement,
        ListFooterProps
    >((props, ref) => (

        <div

            {...props}

            ref={ref}

        >

            {props.children}

        </div>

    ));

ListFooter.displayName =
    "ListFooter";

export default ListFooter;
