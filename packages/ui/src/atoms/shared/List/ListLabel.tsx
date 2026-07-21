/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListLabel.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListLabelProps
    extends HTMLAttributes<HTMLDivElement> {}

export const ListLabel =
    forwardRef<
        HTMLDivElement,
        ListLabelProps
    >((props, ref) => (

        <div

            {...props}

            ref={ref}

            role="presentation"

        >

            {props.children}

        </div>

    ));

ListLabel.displayName =
    "ListLabel";

export default ListLabel;
