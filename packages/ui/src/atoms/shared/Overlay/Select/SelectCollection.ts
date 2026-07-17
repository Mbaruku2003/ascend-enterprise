/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectCollection.ts
 *
 * Internal registry of Select items.
 *
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface SelectCollectionItem {

    value: string;

    label: ReactNode;

    disabled: boolean;

}

/* -------------------------------------------------------------------------- */
/* Collection                                                                 */
/* -------------------------------------------------------------------------- */

export class SelectCollection {

    private readonly items =
        new Map<
            string,
            SelectCollectionItem
        >();

    register(
        item: SelectCollectionItem,
    ) {

        this.items.set(
            item.value,
            item,
        );

    }

    unregister(
        value: string,
    ) {

        this.items.delete(
            value,
        );

    }

    get(
        value: string,
    ) {

        return this.items.get(
            value,
        );

    }

    getAll() {

        return [

            ...this.items.values(),

        ];

    }

    has(
        value: string,
    ) {

        return this.items.has(
            value,
        );

    }

    clear() {

        this.items.clear();

    }

}
