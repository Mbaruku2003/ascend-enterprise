/**
 * ============================================================================
 * Ascend Enterprise UI
 * Command
 * ----------------------------------------------------------------------------
 * File: CommandCollection.ts
 *
 * Enterprise collection powering the Command System.
 *
 * Extends the SelectCollection with search capabilities while reusing the
 * existing registration, navigation and scrolling behaviour.
 *
 * ============================================================================
 */

import {
    SelectCollection,
    type SelectCollectionItem,
} from "../Select/SelectCollection";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface CommandCollectionItem
    extends SelectCollectionItem {

    /**
     * Additional searchable keywords.
     */
    keywords?: readonly string[];

    /**
     * Optional group identifier.
     */
    group?: string;

}

/* -------------------------------------------------------------------------- */
/* Collection                                                                 */
/* -------------------------------------------------------------------------- */

export class CommandCollection
    extends SelectCollection {

    /* ---------------------------------------------------------------------- */
    /* Registration                                                           */
    /* ---------------------------------------------------------------------- */

    override register(
        item: CommandCollectionItem,
    ): void {

        super.register(item);

    }

    /* ---------------------------------------------------------------------- */
    /* Searching                                                              */
    /* ---------------------------------------------------------------------- */

    search(
        query: string,
    ): readonly CommandCollectionItem[] {

        const normalized =
            query
                .trim()
                .toLowerCase();

        if (!normalized) {

            return this
                .getEnabled()
                as readonly CommandCollectionItem[];

        }

        return this
            .getEnabled()
            .filter(item => {

                const label =
                    typeof item.label === "string"
                        ? item.label.toLowerCase()
                        : "";

                if (

                    label.includes(
                        normalized,
                    )

                ) {

                    return true;

                }

                return item.keywords?.some(

                    keyword =>

                        keyword
                            .toLowerCase()
                            .includes(
                                normalized,
                            ),

                ) ?? false;

            })

            as readonly CommandCollectionItem[];

    }

    /* ---------------------------------------------------------------------- */
    /* Grouping                                                               */
    /* ---------------------------------------------------------------------- */

    byGroup(
        group: string,
    ): readonly CommandCollectionItem[] {

        return this
            .getEnabled()
            .filter(

                item =>

                    (

                        item as CommandCollectionItem

                    ).group === group,

            )

            as readonly CommandCollectionItem[];

    }

    groups():
        readonly string[] {

        return [

            ...new Set(

                this

                    .getEnabled()

                    .map(

                        item =>

                            (

                                item as CommandCollectionItem

                            ).group,

                    )

                    .filter(Boolean),

            ),

        ] as string[];

    }

}

export default CommandCollection;
