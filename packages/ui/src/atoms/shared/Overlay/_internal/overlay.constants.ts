/**
 * ============================================================================
 * Ascend Enterprise UI
 * Overlay Engine
 * ----------------------------------------------------------------------------
 * File: overlay.constants.ts
 *
 * Shared default configuration for every overlay component.
 *
 * These values are intentionally centralized so Dialog, Drawer, Popover,
 * Menu, Tooltip, HoverCard, Select and future overlay components all
 * behave consistently.
 * ============================================================================
 */

import type { OverlayStatus } from "./Overlay.types";

/* -------------------------------------------------------------------------- */
/* Overlay Defaults                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Base z-index assigned to the first overlay.
 *
 * Every additional overlay increments from this value.
 */
export const DEFAULT_OVERLAY_Z_INDEX = 1000;

/**
 * Default modal behavior.
 */
export const DEFAULT_MODAL = false;

/**
 * Default open state.
 */
export const DEFAULT_OPEN = false;

/**
 * Initial overlay lifecycle state.
 */
export const DEFAULT_STATUS: OverlayStatus = "closed";

/**
 * Whether Escape closes an overlay by default.
 */
export const DEFAULT_CLOSE_ON_ESCAPE = true;

/**
 * Whether clicking outside dismisses an overlay.
 */
export const DEFAULT_CLOSE_ON_INTERACT_OUTSIDE = true;

/**
 * Whether focus should automatically move into an overlay
 * when it opens.
 */
export const DEFAULT_AUTO_FOCUS = true;

/**
 * Whether focus should be restored to the trigger when
 * an overlay closes.
 */
export const DEFAULT_RESTORE_FOCUS = true;

/**
 * Whether background scrolling should be prevented while
 * a modal overlay is open.
 */
export const DEFAULT_SCROLL_LOCK = true;

/**
 * Whether the overlay should render inside a portal.
 */
export const DEFAULT_PORTAL = true;

/**
 * Whether the overlay should trap keyboard focus.
 *
 * Dialogs typically override this to true.
 * Popovers usually leave it false.
 */
export const DEFAULT_TRAP_FOCUS = false;

/**
 * Default animation duration (milliseconds).
 *
 * Presence will consume this later.
 */
export const DEFAULT_ANIMATION_DURATION = 150;

/**
 * Default transition timing function.
 */
export const DEFAULT_EASING = "ease";

/**
 * Default overlay id prefix.
 */
export const DEFAULT_ID_PREFIX = "overlay";

/**
 * Maximum supported overlay nesting depth.
 *
 * Mainly used as a safeguard against accidental recursive
 * overlay creation.
 */
export const MAX_OVERLAY_DEPTH = 100;

/* -------------------------------------------------------------------------- */
/* Layering                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Amount each overlay increases its z-index.
 */
export const OVERLAY_Z_INDEX_STEP = 10;

/**
 * Reserved z-index for portal roots.
 */
export const PORTAL_ROOT_Z_INDEX = 999;

/* -------------------------------------------------------------------------- */
/* Data Attributes                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Shared data-state values.
 */
export const DATA_STATE_OPEN = "open";

export const DATA_STATE_CLOSED = "closed";

export const DATA_STATE_OPENING = "opening";

export const DATA_STATE_CLOSING = "closing";

/* -------------------------------------------------------------------------- */
/* Events                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Internal event names used by the Overlay Engine.
 *
 * Keeping these centralized avoids hardcoded strings.
 */
export const OVERLAY_EVENTS = {
    REGISTER: "overlay:register",
    UNREGISTER: "overlay:unregister",
    UPDATE: "overlay:update",
    OPEN: "overlay:open",
    CLOSE: "overlay:close",
} as const;

/* -------------------------------------------------------------------------- */
/* Portal                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Default portal container id.
 *
 * PortalManager will create this element automatically
 * if it does not already exist.
 */
export const DEFAULT_PORTAL_CONTAINER_ID = "ascend-overlay-root";
