/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectTrigger.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import MenuTrigger from "../../Navigation/Menu/MenuTrigger";

import type {
    HTMLAttributes,
} from "react";

export interface SelectTriggerProps
    extends HTMLAttributes<HTMLElement> {

    asChild?: boolean;

}

export const SelectTrigger =
forwardRef<
    HTMLElement,
    SelectTriggerProps
>(

function SelectTrigger(

    props,

    ref,

) {

    return (

        <MenuTrigger

            ref={ref}

            {...props}

        />

    );

},

);

SelectTrigger.displayName =
    "SelectTrigger";

export default SelectTrigger;
