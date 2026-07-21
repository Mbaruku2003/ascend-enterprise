/**
 * ============================================================================
 * Ascend Enterprise UI
 * Combobox
 * ----------------------------------------------------------------------------
 * File: ComboboxContent.tsx
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import type {
    HTMLAttributes,
} from "react";

import MenuContent from "../../Navigation/Menu/MenuContent";
import {
    List,
} from "../../List";

export interface ComboboxContentProps
    extends HTMLAttributes<HTMLDivElement> {}

export const ComboboxContent =
    forwardRef<
        HTMLDivElement,
        ComboboxContentProps
    >(function ComboboxContent(

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

ComboboxContent.displayName =
    "ComboboxContent";

export default ComboboxContent;
