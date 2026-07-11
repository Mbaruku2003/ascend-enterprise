/**
 * ============================================================================
 * Ascend UI
 * Overlay Styles
 * ============================================================================
 */

export const DEFAULT_OVERLAY_Z_INDEX = 40;

export const OVERLAY_ROOT_CLASS =
  "fixed inset-0";

export const OVERLAY_BACKGROUND_CLASS =
  "bg-black/50";

export const OVERLAY_TRANSPARENT_CLASS =
  "bg-transparent";

export const OVERLAY_BLUR_CLASS =
  "backdrop-blur-sm";

export function resolveOverlayClasses({
  blur,
  transparent,
}: {
  blur: boolean;
  transparent: boolean;
}) {
  return [
    OVERLAY_ROOT_CLASS,

    transparent
      ? OVERLAY_TRANSPARENT_CLASS
      : OVERLAY_BACKGROUND_CLASS,

    blur
      ? OVERLAY_BLUR_CLASS
      : "",
  ];
}
