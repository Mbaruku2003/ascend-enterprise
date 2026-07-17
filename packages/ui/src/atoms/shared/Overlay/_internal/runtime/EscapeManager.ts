/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine Runtime
 * ----------------------------------------------------------------------------
 * File: EscapeManager.ts
 *
 * Handles global Escape key presses.
 *
 * Responsibilities:
 *
 * • Register a single global keyboard listener
 * • Close the top-most dismissible overlay
 * • Ignore events when no overlays exist
 * • Stay completely independent of React
 *
 * ============================================================================
 */

import type {
    OverlaySnapshot,
    OverlayRecord,
} from "../Overlay.types";

import { OverlayService } from "./OverlayService";

/* -------------------------------------------------------------------------- */
/* Escape Manager                                                             */
/* -------------------------------------------------------------------------- */

export class EscapeManager extends OverlayService {

    /**
     * Runtime identifier.
     */
    public readonly name = "EscapeManager";

    /**
     * Latest snapshot received from the OverlayStack.
     */
    private snapshot?: OverlaySnapshot;

    /**
     * Bound keyboard handler.
     */
    private readonly handleKeyDown = (
        event: KeyboardEvent,
    ): void => {

        if (event.key !== "Escape") {

            return;

        }

        const overlay = this.getTopOverlay();

        if (!overlay) {

            return;

        }

        /**
         * Ignore overlays that are already closed.
         */
        if (!overlay.open) {

            return;

        }

        /**
         * Close the overlay.
         *
         * Future versions will respect:
         * - disableEscapeKeyDown
         * - modal hierarchy
         * - onEscapeKeyDown callbacks
         */
	this.controller.dismiss(
	    overlay.id,
	);

    };

    /* ---------------------------------------------------------------------- */
    /* Lifecycle                                                              */
    /* ---------------------------------------------------------------------- */

    protected override onStart(): void {

        if (typeof window === "undefined") {

            return;

        }

        window.addEventListener(
            "keydown",
            this.handleKeyDown,
        );

    }

    protected override onStop(): void {

        if (typeof window === "undefined") {

            return;

        }

        window.removeEventListener(
            "keydown",
            this.handleKeyDown,
        );

    }

    protected override onDispose(): void {

        this.onStop();

    }

    /* ---------------------------------------------------------------------- */
    /* Updates                                                                */
    /* ---------------------------------------------------------------------- */

    protected override onUpdate(
        snapshot: OverlaySnapshot,
    ): void {

        this.snapshot = snapshot;

    }

    /* ---------------------------------------------------------------------- */
    /* Helpers                                                                */
    /* ---------------------------------------------------------------------- */

    /**
     * Returns the current top-most overlay.
     */
    private getTopOverlay():
        | OverlayRecord
        | undefined {

        return this.snapshot?.state.topOverlay;

    }

}
