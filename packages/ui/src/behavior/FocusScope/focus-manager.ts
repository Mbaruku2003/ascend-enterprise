/**
 * ============================================================================
 * Ascend UI
 * Focus Manager
 * ============================================================================
 */

const scopes: HTMLElement[] = [];

export function registerScope(
    element: HTMLElement,
) {

    if (!scopes.includes(element)) {

        scopes.push(element);

    }

}

export function unregisterScope(
    element: HTMLElement,
) {

    const index =
        scopes.indexOf(element);

    if (index >= 0) {

        scopes.splice(index, 1);

    }

}

export function isTopScope(
    element: HTMLElement,
) {

    return (
        scopes[
            scopes.length - 1
        ] === element
    );

}

export function getTopScope() {

    return scopes[
        scopes.length - 1
    ];

}

export function scopeCount() {

    return scopes.length;

}
