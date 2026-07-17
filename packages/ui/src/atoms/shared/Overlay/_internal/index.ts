/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: index.ts
 *
 * Internal barrel exports for the Overlay Engine.
 *
 * This module is consumed only by overlay components such as:
 *
 *  • Dialog
 *  • Drawer
 *  • Popover
 *  • Tooltip
 *  • HoverCard
 *  • Menu
 *  • DropdownMenu
 *  • ContextMenu
 *  • Menubar
 *  • Select
 *  • Combobox
 *
 * It is NOT intended to be exported from the public @ascend/ui API.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type {
    OverlayId,
    OverlayType,
    OverlayStatus,
    OverlayRecord,
    OverlayRegisterOptions,
    OverlayState,
    OverlayContextValue,
    OverlayStore,
} from "./Overlay.types";

export type {
    Listener,
    OverlayCollectionListener,
    OverlayEvent,
    OverlayEventListener,
    OverlayEventType,
    OverlayObservable,
    OverlayStateListener,
    TopOverlayListener,
    Unsubscribe,
} from "./Subscription";

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

export {
    DEFAULT_ANIMATION_DURATION,
    DEFAULT_AUTO_FOCUS,
    DEFAULT_CLOSE_ON_ESCAPE,
    DEFAULT_CLOSE_ON_INTERACT_OUTSIDE,
    DEFAULT_EASING,
    DEFAULT_ID_PREFIX,
    DEFAULT_MODAL,
    DEFAULT_OPEN,
    DEFAULT_OVERLAY_Z_INDEX,
    DEFAULT_PORTAL,
    DEFAULT_PORTAL_CONTAINER_ID,
    DEFAULT_RESTORE_FOCUS,
    DEFAULT_SCROLL_LOCK,
    DEFAULT_STATUS,
    DEFAULT_TRAP_FOCUS,
    MAX_OVERLAY_DEPTH,
    OVERLAY_EVENTS,
    OVERLAY_Z_INDEX_STEP,
    PORTAL_ROOT_Z_INDEX,
    DATA_STATE_CLOSED,
    DATA_STATE_CLOSING,
    DATA_STATE_OPEN,
    DATA_STATE_OPENING,
} from "./overlay.constants";

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

export {
    calculateOverlayZIndex,
    createOverlayId,
    createOverlayState,
    findOverlay,
    formatOverlay,
    getTopOverlay,
    hasOverlay,
    isClosed,
    isClosing,
    isOpened,
    isOpening,
    isOverlayOpen,
    removeOverlay,
    resetOverlayIdCounter,
    updateOverlay,
} from "./overlay.utils";

/* -------------------------------------------------------------------------- */
/* Store                                                                      */
/* -------------------------------------------------------------------------- */

export {
    OverlayStack,
    overlayStack,
} from "./OverlayStack";

/* -------------------------------------------------------------------------- */
/* React                                                                      */
/* -------------------------------------------------------------------------- */

export {
    OverlayContext,
} from "./OverlayContext";

export {
    OverlayProvider,
} from "./OverlayProvider";

export {
    useOverlay,
} from "./useOverlay";
