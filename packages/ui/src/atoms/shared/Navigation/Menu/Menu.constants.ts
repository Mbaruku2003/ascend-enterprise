/**
 * ============================================================================
 * Ascend Enterprise UI
 * Menu
 * ----------------------------------------------------------------------------
 * File: Menu.constants.ts
 *
 * Shared defaults for the Menu component family.
 *
 * ============================================================================
 */

import type {
    MenuDirection,
    MenuOrientation,
} from "./Menu.types";

import type {
    FloatingPlacement,
} from "@/atoms/shared/Overlay/Floating/Floating.types";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Default open state.
 */
export const DEFAULT_MENU_OPEN = false;

/**
 * Menu is modal by default.
 */
export const DEFAULT_MENU_MODAL = true;

/**
 * Keyboard navigation wraps by default.
 */
export const DEFAULT_MENU_LOOP = true;

/**
 * Default orientation.
 */
export const DEFAULT_MENU_ORIENTATION: MenuOrientation =
    "vertical";

/**
 * Default text direction.
 */
export const DEFAULT_MENU_DIRECTION: MenuDirection =
    "ltr";

/* -------------------------------------------------------------------------- */
/* Floating                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Default menu placement.
 */
export const DEFAULT_MENU_PLACEMENT: FloatingPlacement =
    "bottom-start";

/**
 * Default offset between trigger and menu.
 */
export const DEFAULT_MENU_OFFSET = 4;

/**
 * Cross-axis offset.
 */
export const DEFAULT_MENU_CROSS_OFFSET = 0;

/**
 * Collision padding.
 */
export const DEFAULT_MENU_COLLISION_PADDING = 8;

/**
 * Force mount.
 */
export const DEFAULT_MENU_FORCE_MOUNT = false;

/* -------------------------------------------------------------------------- */
/* Animation                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Default enter duration (ms).
 */
export const DEFAULT_MENU_ENTER_DURATION = 150;

/**
 * Default exit duration (ms).
 */
export const DEFAULT_MENU_EXIT_DURATION = 100;

/**
 * Animation easing.
 */
export const DEFAULT_MENU_EASING =
    "cubic-bezier(0.16, 1, 0.3, 1)";

/* -------------------------------------------------------------------------- */
/* Focus                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Automatically focus the first enabled item when opening.
 */
export const DEFAULT_MENU_AUTO_FOCUS = true;

/**
 * Restore focus to the trigger when closing.
 */
export const DEFAULT_MENU_RESTORE_FOCUS = true;

/**
 * Close the menu when Escape is pressed.
 */
export const DEFAULT_MENU_CLOSE_ON_ESCAPE = true;

/**
 * Close the menu when clicking outside.
 */
export const DEFAULT_MENU_CLOSE_ON_OUTSIDE_POINTER = true;

/**
 * Close the menu after selecting an item.
 */
export const DEFAULT_MENU_CLOSE_ON_SELECT = true;

/* -------------------------------------------------------------------------- */
/* Keyboard                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Enable Home/End navigation.
 */
export const DEFAULT_MENU_HOME_END_KEYS = true;

/**
 * Enable typeahead search.
 */
export const DEFAULT_MENU_TYPEAHEAD = true;

/**
 * Delay (ms) before clearing the typeahead buffer.
 */
export const DEFAULT_MENU_TYPEAHEAD_TIMEOUT = 700;

/* -------------------------------------------------------------------------- */
/* Styling                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Base z-index.
 *
 * Individual applications may override this through tokens.
 */
export const DEFAULT_MENU_Z_INDEX = 50;

/**
 * Minimum width.
 */
export const DEFAULT_MENU_MIN_WIDTH = 192;

/**
 * Maximum height before scrolling.
 */
export const DEFAULT_MENU_MAX_HEIGHT = 320;

/* -------------------------------------------------------------------------- */
/* Submenus                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Delay before opening a submenu on hover.
 */
export const DEFAULT_SUBMENU_OPEN_DELAY = 100;

/**
 * Delay before closing a submenu.
 */
export const DEFAULT_SUBMENU_CLOSE_DELAY = 250;
