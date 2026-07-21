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

import type {
    HTMLAttributes,
} from "react";

import MenuContent from "../../Navigation/Menu/MenuContent";
import { List } from "../../List";

export interface SelectContentProps
    extends HTMLAttributes<HTMLDivElement> {}

export const SelectContent =
    forwardRef<
        HTMLDivElement,
        SelectContentProps
    >(function SelectContent(

        {

            children,

            ...props

        },

        ref,

    ) {

        return (

            <MenuContent

                ref={ref}

                {...props}

            >

                <List>

                    {children}

                </List>

            </MenuContent>

        );

    });

SelectContent.displayName =
    "SelectContent";

export default SelectContent;
