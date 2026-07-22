/**
 * ============================================================================
 * Ascend Enterprise UI
 * Autocomplete
 * ----------------------------------------------------------------------------
 * File: AutocompleteCollection.ts
 *
 * Enterprise collection powering the Autocomplete component.
 *
 * Extends the CommandCollection while adding helper methods for option
 * retrieval and selection.
 *
 * ============================================================================
 */

import {
    CommandCollection,
    type CommandCollectionItem,
} from "@/atoms/shared/Overlay/Command";

import type {
    AutocompleteItem,
} from "./Autocomplete.types";

/* -------------------------------------------------------------------------- */
/* Collection                                                                 */
/* -------------------------------------------------------------------------- */

export class AutocompleteCollection
    extends CommandCollection {

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    override register(
        item: AutocompleteItem,
    ): void {

        super.register(item);

    }

    /* ---------------------------------------------------------------------- */
    /* Search                                                                 */
    /* ---------------------------------------------------------------------- */

    filter(
        query: string,
    ): readonly AutocompleteItem[] {

        return this.search(
            query,
        ) as readonly AutocompleteItem[];

    }

    /* ---------------------------------------------------------------------- */
    /* Lookup                                                                 */
    /* ---------------------------------------------------------------------- */

    getItem(
        value: string,
    ): AutocompleteItem | undefined {

        return this
            .getEnabled()
            .find(

                item =>

                    item.value === value,

            ) as AutocompleteItem | undefined;

    }

    /* ---------------------------------------------------------------------- */
    /* Selection                                                              */
    /* ---------------------------------------------------------------------- */

    hasValue(
        value: string,
    ): boolean {

        return (

            this.getItem(
                value,
            ) !== undefined

        );

    }

    /* ---------------------------------------------------------------------- */
    /* Navigation                                                             */
    /* ---------------------------------------------------------------------- */

    first():
        AutocompleteItem | undefined {

        return this
            .getEnabled()[0]

            as AutocompleteItem | undefined;

    }

    last():
        AutocompleteItem | undefined {

        const items =
            this.getEnabled();

        return items[
            items.length - 1
        ] as
            | AutocompleteItem
            | undefined;

    }

    at(
        index: number,
    ): AutocompleteItem | undefined {

        return this
            .getEnabled()[index]

            as
                | AutocompleteItem
                | undefined;

    }

    indexOf(
        value: string,
    ): number {

        return this
            .getEnabled()

            .findIndex(

                item =>

                    item.value === value,

            );

    }

    /* ---------------------------------------------------------------------- */
    /* Helpers                                                                */
    /* ---------------------------------------------------------------------- */

    values():
        readonly string[] {

        return this

            .getEnabled()

            .map(

                item =>

                    item.value,

            );

    }

    labels():
        readonly string[] {

        return this

            .getEnabled()

            .map(item =>

                typeof item.label === "string"

                    ? item.label

                    : "",

            );

    }

}

export default AutocompleteCollection;
