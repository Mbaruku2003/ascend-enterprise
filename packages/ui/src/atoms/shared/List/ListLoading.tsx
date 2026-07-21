/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListLoading.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListLoadingProps
    extends HTMLAttributes<HTMLDivElement> {

    loading?: boolean;

}

export const ListLoading =
    forwardRef<
        HTMLDivElement,
        ListLoadingProps
    >(({

        loading = false,

        children,

        ...props

    }, ref) => {

        if (!loading) {

            return null;

        }

        return (

            <div

                {...props}

                ref={ref}

                role="status"

                aria-live="polite"

            >

                {children}

            </div>

        );

    });

ListLoading.displayName =
    "ListLoading";

export default ListLoading;
