/**
 * ============================================================================
 * Ascend Enterprise UI
 * Shared List
 * ----------------------------------------------------------------------------
 * File: ListGroup.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

export interface ListGroupProps
    extends HTMLAttributes<HTMLDivElement> {}

export const ListGroup =
    forwardRef<
        HTMLDivElement,
        ListGroupProps
    >((props, ref) => (

        <div

            {...props}

            ref={ref}

            role="group"

        >

            {props.children}

        </div>

    ));

ListGroup.displayName =
    "ListGroup";

export default ListGroup;
