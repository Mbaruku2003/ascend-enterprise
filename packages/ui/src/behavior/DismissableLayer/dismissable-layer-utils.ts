/**
 * ============================================================================
 * Ascend UI
 * Dismissable Layer Utilities
 * ============================================================================
 */

export function isEventInside(
    target: EventTarget | null,
    element: HTMLElement | null,
) {
    if (!target || !element) {
        return false;
    }

    return element.contains(
        target as Node,
    );
}
