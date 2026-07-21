/**
 * ============================================================================
 * Ascend Enterprise UI
 * Combobox
 * ----------------------------------------------------------------------------
 * Shared utilities.
 * ============================================================================
 */

export function normalizeQuery(

    value: string,

) {

    return value

        .trim()

        .toLowerCase();

}

export function isPrintableKey(

    key: string,

) {

    return (

        key.length === 1 &&

        key.trim() !== ""

    );

}

export function isEmptyQuery(

    value: string,

) {

    return normalizeQuery(

        value,

    ).length === 0;

}
