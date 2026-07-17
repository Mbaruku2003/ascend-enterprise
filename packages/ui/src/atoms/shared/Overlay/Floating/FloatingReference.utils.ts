/**
 * ============================================================================
 * Ascend Enterprise UI
 * Floating
 * ----------------------------------------------------------------------------
 * File: FloatingReference.utils.ts
 *
 * Resolves every supported floating reference into a DOMRect.
 *
 * This isolates reference handling from the positioning engine.
 *
 * ============================================================================
 */

import type {
    RefObject,
} from "react";

import type {
    FloatingVirtualElement,
} from "./FloatingVirtualElement";

import {
    getAnchorRect,
} from "./FloatingPosition.utils";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ResolveFloatingReferenceOptions {

    /**
     * HTMLElement reference.
     */
    anchorRef?: RefObject<HTMLElement | null>;

    /**
     * Virtual reference.
     */
    virtualAnchor?: FloatingVirtualElement;

}

/* -------------------------------------------------------------------------- */
/* Resolver                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Resolves the current floating reference into a DOMRect.
 *
 * Resolution order:
 *
 * 1. Virtual reference
 * 2. HTMLElement reference
 */
export function resolveFloatingReference({

    anchorRef,

    virtualAnchor,

}: ResolveFloatingReferenceOptions): DOMRect | null {

    if (virtualAnchor) {

        return virtualAnchor.getBoundingClientRect();

    }

    if (anchorRef?.current) {

        return getAnchorRect(

            anchorRef.current,

        );

    }

    return null;

}

export default resolveFloatingReference;
