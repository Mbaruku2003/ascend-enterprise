/**
 * ============================================================================
 * Ascend UI
 * AspectRatio Styles
 * ============================================================================
 */

import type {
  AspectRatioValue,
} from "./AspectRatio.types";

/* -------------------------------------------------------------------------- */

export const DEFAULT_ASPECT_RATIO: AspectRatioValue =
  "16/9";

/* -------------------------------------------------------------------------- */

export const ASPECT_RATIO_ROOT =
  "relative w-full overflow-hidden";

export const ASPECT_RATIO_CONTENT =
  "absolute inset-0 h-full w-full";

/* -------------------------------------------------------------------------- */

export function resolveRatio(
  ratio: AspectRatioValue,
): string {
  if (typeof ratio === "number") {
    return `${ratio}`;
  }

  return ratio;
}
