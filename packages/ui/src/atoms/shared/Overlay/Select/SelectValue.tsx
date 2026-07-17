/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectValue.tsx
 * ============================================================================
 */

import {

    type HTMLAttributes,

} from "react";

import {

    useSelect,

} from "./useSelect";

export interface SelectValueProps
extends HTMLAttributes<HTMLSpanElement> {

    placeholder?: string;

}

export function SelectValue({

    placeholder = "Select...",

    ...props

}: SelectValueProps) {

const {

    value,

    collection,

} = useSelect();

const selected =
    value

        ? collection.get(value)

        : undefined;

return (

    <span {...props}>

        {

            selected?.label ??

            placeholder

        }

    </span>

);

}

export default SelectValue;
