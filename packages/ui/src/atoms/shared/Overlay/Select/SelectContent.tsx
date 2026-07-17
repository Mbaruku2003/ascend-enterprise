/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectContent.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import MenuContent from "../Menu/MenuContent";

import type {
    HTMLAttributes,
} from "react";

export interface SelectContentProps
extends HTMLAttributes<HTMLDivElement> {}

export const SelectContent =
forwardRef<
    HTMLDivElement,
    SelectContentProps
>(

function SelectContent(

    props,

    ref,

) {

    return (

        <MenuContent

            ref={ref}

            {...props}

        />

    );

},

);

SelectContent.displayName =
    "SelectContent";

export default SelectContent;
