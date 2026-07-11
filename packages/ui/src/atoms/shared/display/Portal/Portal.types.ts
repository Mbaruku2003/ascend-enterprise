/**
 * ============================================================================
 * Ascend UI
 * Portal Types
 * ============================================================================
 */

import type {
  DocumentFragment,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

export interface PortalProps {
  /**
   * Portal content.
   */
  children?: ReactNode;

  /**
   * Mount target.
   *
   * Defaults to document.body.
   */
  container?:
    | Element
    | DocumentFragment
    | null;

  /**
   * Render children inline.
   *
   * Useful for testing or disabling portal behavior.
   *
   * @default false
   */
  disabled?: boolean;
}
