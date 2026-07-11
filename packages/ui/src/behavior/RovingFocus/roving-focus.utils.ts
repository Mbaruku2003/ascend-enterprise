/**
 * ============================================================================
 * Ascend UI
 * Roving Focus Utilities
 * ============================================================================
 */

import type {
    RovingFocusItem,
    RovingRegistry,
} from "./RovingFocus.types";

/**
 * Registry → ordered array.
 */
export function getItems(
    registry: RovingRegistry,
): RovingFocusItem[] {

    return Array.from(
        registry.values(),
    );

}

/**
 * Enabled items only.
 */
export function getEnabledItems(
    registry: RovingRegistry,
): RovingFocusItem[] {

    return getItems(
        registry,
    ).filter(

        item => !item.disabled,

    );

}

/**
 * Find current index.
 */
export function getCurrentIndex(

    items: RovingFocusItem[],

    currentId: string | null,

): number {

    if (!currentId) {

        return -1;

    }

    return items.findIndex(

        item =>
            item.id === currentId,

    );

}

/**
 * First enabled item.
 */
export function getFirstEnabledItem(

    registry: RovingRegistry,

): RovingFocusItem | undefined {

    return getEnabledItems(
        registry,
    )[0];

}

/**
 * Last enabled item.
 */
export function getLastEnabledItem(

    registry: RovingRegistry,

): RovingFocusItem | undefined {

    const items =
        getEnabledItems(
            registry,
        );

    return items[
        items.length - 1
    ];

}

/**
 * Next enabled item.
 */
export function getNextEnabledItem(

    registry: RovingRegistry,

    currentId: string | null,

    loop: boolean,

): RovingFocusItem | undefined {

    const items =
        getEnabledItems(
            registry,
        );

    if (!items.length) {

        return;

    }

    const current =
        getCurrentIndex(
            items,
            currentId,
        );

    if (current === -1) {

        return items[0];

    }

    if (

        current + 1 <
        items.length

    ) {

        return items[
            current + 1
        ];

    }

    return loop
        ? items[0]
        : items[current];

}

/**
 * Previous enabled item.
 */
export function getPreviousEnabledItem(

    registry: RovingRegistry,

    currentId: string | null,

    loop: boolean,

): RovingFocusItem | undefined {

    const items =
        getEnabledItems(
            registry,
        );

    if (!items.length) {

        return;

    }

    const current =
        getCurrentIndex(
            items,
            currentId,
        );

    if (current === -1) {

        return items[0];

    }

    if (current > 0) {

        return items[
            current - 1
        ];

    }

    return loop
        ? items[
            items.length - 1
        ]
        : items[0];

}

/**
 * Lookup by id.
 */
export function getItemById(

    registry: RovingRegistry,

    id: string,

): RovingFocusItem | undefined {

    return registry.get(
        id,
    );

}

/**
 * Typeahead lookup.
 *
 * Future:
 * Menu
 * Select
 * Combobox
 * Command Palette
 */
export function findItemByText(

    registry: RovingRegistry,

    text: string,

): RovingFocusItem | undefined {

    const search =
        text.trim().toLowerCase();

    return getEnabledItems(
        registry,
    ).find(

        item =>

            item.textValue
                ?.toLowerCase()
                .startsWith(
                    search,
                ),

    );

}

/**
 * Focus helper.
 */
export function focusItem(

    item?: RovingFocusItem,

): void {

    item
        ?.ref
        .current
        ?.focus();

}
