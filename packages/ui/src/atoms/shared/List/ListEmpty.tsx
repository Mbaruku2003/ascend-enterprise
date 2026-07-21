/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListEmpty.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListEmptyProps
    extends HTMLAttributes<HTMLDivElement> {

    visible?: boolean;

}

export const ListEmpty =
    forwardRef<
        HTMLDivElement,
        ListEmptyProps
    >(({

        visible = true,

        children,

        ...props

    }, ref) => {

        if (!visible) {

            return null;

        }

        return (

            <div

                {...props}

                ref={ref}

                role="status"

            >

                {children}

            </div>

        );

    });

ListEmpty.displayName =
    "ListEmpty";

export default ListEmpty;
