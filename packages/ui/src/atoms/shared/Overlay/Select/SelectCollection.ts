/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay
 * ----------------------------------------------------------------------------
 * File: SelectCollection.ts
 *
 * Internal registry and navigation engine for Select-like components.
 *
 * This collection is intentionally generic and reusable across:
 *
 *  • Select
 *  • Combobox
 *  • Command Palette
 *  • Listbox
 *  • TreeView
 *  • TransferList
 *
 * ============================================================================
 */

import type {
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Search                                                                     */
/* -------------------------------------------------------------------------- */

export type SelectSearchMode =
    | "prefix"
    | "contains"
    | "exact";

export interface SelectSearchOptions {

    mode?: SelectSearchMode;

    query: string;

}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface SelectCollectionItem {

    value: string;

    label: ReactNode;

    disabled: boolean;

    ref?: HTMLElement | null;

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

    private activeValue?:
        string;

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    register(
        item: SelectCollectionItem,
    ): void {

        this.items.set(
            item.value,
            item,
        );

    }

    unregister(
        value: string,
    ): void {

        this.items.delete(
            value,
        );

        if (

            this.activeValue === value

        ) {

            this.activeValue =
                undefined;

        }

    }

    clear(): void {

        this.items.clear();

        this.activeValue =
            undefined;

    }

    /* ---------------------------------------------------------------------- */
    /* Queries                                                                */
    /* ---------------------------------------------------------------------- */

    has(
        value: string,
    ): boolean {

        return this.items.has(
            value,
        );

    }

    get(
        value: string,
    ):
        | SelectCollectionItem
        | undefined {

        return this.items.get(
            value,
        );

    }

    getAll():
        readonly SelectCollectionItem[] {

        return [

            ...this.items.values(),

        ];

    }

    getEnabled():
        readonly SelectCollectionItem[] {

        return this
            .getAll()
            .filter(

                item =>
                    !item.disabled,

            );

    }

    size(): number {

        return this.items.size;

    }

    isEmpty(): boolean {

        return this.items.size === 0;

    }

    /* ---------------------------------------------------------------------- */
    /* Active Item                                                            */
    /* ---------------------------------------------------------------------- */

    setActive(
        value: string,
    ): void {

        if (

            this.has(value)

        ) {

            this.activeValue =
                value;

        }

    }

    getActive():

        | SelectCollectionItem

        | undefined {

        if (

            !this.activeValue

        ) {

            return undefined;

        }

        return this.get(
            this.activeValue,
        );

    }

    clearActive(): void {

        this.activeValue =
            undefined;

    }

    isActive(
        value: string,
    ): boolean {

        return (
            this.activeValue ===
            value
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Navigation                                                             */
    /* ---------------------------------------------------------------------- */

    first():

        | SelectCollectionItem

        | undefined {

        return this
            .getEnabled()[0];

    }

    last():

        | SelectCollectionItem

        | undefined {

        const items =
            this.getEnabled();

        return items[
            items.length - 1
        ];

    }

    next(
        value: string,
        loop = false,
    ):

        | SelectCollectionItem

        | undefined {

        const items =
            this.getEnabled();

        const index =
            items.findIndex(

                item =>
                    item.value ===
                    value,

            );

        if (

            index < 0

        ) {

            return undefined;

        }

        if (

            index ===
            items.length - 1

        ) {

            return loop
                ? items[0]
                : undefined;

        }

        return items[
            index + 1
        ];

    }

    previous(
        value: string,
        loop = false,
    ):

        | SelectCollectionItem

        | undefined {

        const items =
            this.getEnabled();

        const index =
            items.findIndex(

                item =>
                    item.value ===
                    value,

            );

        if (

            index < 0

        ) {

            return undefined;

        }

        if (

            index === 0

        ) {

            return loop
                ? items[
                    items.length - 1
                ]
                : undefined;

        }

        return items[
            index - 1
        ];

    }

    firstEnabled() {

        return this.first();

    }

    lastEnabled() {

        return this.last();

    }

    nextEnabled(
        value: string,
        loop = false,
    ) {

        return this.next(
            value,
            loop,
        );

    }

    previousEnabled(
        value: string,
        loop = false,
    ) {

        return this.previous(
            value,
            loop,
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Search                                                                 */
    /* ---------------------------------------------------------------------- */

    find(
        options:
            SelectSearchOptions,
    ):

        | SelectCollectionItem

        | undefined {

        const {

            mode = "prefix",

            query,

        } = options;

        const search =
            query
                .trim()
                .toLowerCase();

        if (!search) {

            return undefined;

        }

        return this
            .getEnabled()
            .find(

                item => {

                    if (

                        typeof item.label !==
                        "string"

                    ) {

                        return false;

                    }

                    const label =
                        item.label
                            .toLowerCase();

                    switch (mode) {

                        case "exact":

                            return (
                                label ===
                                search
                            );

                        case "contains":

                            return label.includes(
                                search,
                            );

                        case "prefix":

                        default:

                            return label.startsWith(
                                search,
                            );

                    }

                },

            );

    }

    findByPrefix(
        query: string,
    ) {

        return this.find({

            mode: "prefix",

            query,

        });

    }

    /* ---------------------------------------------------------------------- */
    /* Ordering                                                               */
    /* ---------------------------------------------------------------------- */

    indexOf(
        value: string,
    ): number {

        return this
            .getEnabled()
            .findIndex(

                item =>
                    item.value ===
                    value,

            );

    }

    at(
        index: number,
    ):

        | SelectCollectionItem

        | undefined {

        return this
            .getEnabled()[index];

    }

    isFirst(
        value: string,
    ): boolean {

        return (
            this.first()?.value ===
            value
        );

    }

    isLast(
        value: string,
    ): boolean {

        return (
            this.last()?.value ===
            value
        );

    }

    /* ---------------------------------------------------------------------- */
    /* Scrolling                                                              */
    /* ---------------------------------------------------------------------- */

    scrollIntoView(
        value: string,
    ): void {

        const item =
            this.get(value);

        item
            ?.ref
            ?.scrollIntoView({

                block: "nearest",

                inline: "nearest",

            });

    }

    scrollActiveIntoView(): void {

        if (

            !this.activeValue

        ) {

            return;

        }

        this.scrollIntoView(

            this.activeValue,

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Future Virtualization                                                  */
    /* ---------------------------------------------------------------------- */

    visibleItems():
        readonly SelectCollectionItem[] {

        return this.getEnabled();

    }

    virtualItems():
        readonly SelectCollectionItem[] {

        return this.getEnabled();

    }

}
