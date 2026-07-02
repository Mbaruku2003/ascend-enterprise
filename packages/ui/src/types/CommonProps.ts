/**
 * Ascend Enterprise UI
 * --------------------
 * CommonProps
 *
 * Shared prop definitions used across every UI component.
 */

import type {
  AriaAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

/**
 * Allows custom CSS variables while preserving CSSProperties typing.
 *
 * Example:
 *
 * style={{
 *   "--ascend-radius": "12px",
 * }}
 */
export interface CSSVariables
  extends CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

/**
 * Base props shared by every Ascend component.
 */
export interface CommonProps
  extends AriaAttributes {
  /**
   * Component children.
   */
  children?: ReactNode;

  /**
   * CSS class names.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSVariables;

  /**
   * Element id.
   */
  id?: string;

  /**
   * Accessibility role.
   */
  role?: HTMLAttributes<HTMLElement>["role"];

  /**
   * Language.
   */
  lang?: string;

  /**
   * Text direction.
   */
  dir?: "ltr" | "rtl" | "auto";

  /**
   * Tooltip text.
   */
  title?: string;

  /**
   * Tab order.
   */
  tabIndex?: number;

  /**
   * Hidden state.
   */
  hidden?: boolean;

  /**
   * Named slot.
   */
  slot?: string;

  /**
   * Test identifier.
   */
  "data-testid"?: string;

  /**
   * Allow arbitrary data-* attributes.
   */
  [key: `data-${string}`]:
    | string
    | number
    | boolean
    | undefined;
}
