/**
 * Ascend Enterprise UI
 * --------------------
 * Shared Layout Utilities
 *
 * Utilities for extracting and resolving layout props.
 */

import type { LayoutProps } from "./layout.types";

/* -------------------------------------------------------------------------- */
/* Layout Prop Keys                                                           */
/* -------------------------------------------------------------------------- */

/**
 * List of all supported layout props.
 *
 * Used to separate layout props from native HTML props.
 */
export const layoutPropKeys = [
  /* Display */
  "display",

  /* Position */
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",

  /* Size */
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",

  /* Margin */
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",

  /* Padding */
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",

  /* Border */
  "rounded",
  "shadow",

  /* Overflow */
  "overflow",
  "overflowX",
  "overflowY",

  /* Flex */
  "flex",
  "direction",
  "wrap",
  "justify",
  "align",
  "alignContent",
  "alignSelf",

  "gap",
  "rowGap",
  "columnGap",

  /* Grid */
  "columns",
  "rows",
  "autoFlow",
] as const;

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type LayoutPropKey =
  typeof layoutPropKeys[number];

/* -------------------------------------------------------------------------- */
/* Type Guard                                                                 */
/* -------------------------------------------------------------------------- */

export function isLayoutProp(
  key: PropertyKey,
): key is LayoutPropKey {
  return layoutPropKeys.includes(
    key as LayoutPropKey,
  );
}

/* -------------------------------------------------------------------------- */
/* Split Props                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Separates layout props from native HTML props.
 */
export function splitLayoutProps<
  T extends Record<string, unknown>,
>(props: T): {
  layoutProps: LayoutProps;
  elementProps: Omit<T, LayoutPropKey>;
} {
  const layoutProps: Partial<LayoutProps> = {};

  const elementProps = {} as Omit<
    T,
    LayoutPropKey
  >;

  for (const key in props) {
    if (isLayoutProp(key)) {
      (
        layoutProps as Record<
          string,
          unknown
        >
      )[key] = props[key];
    } else {
      (
        elementProps as Record<
          string,
          unknown
        >
      )[key] = props[key];
    }
  }

  return {
    layoutProps:
      layoutProps as LayoutProps,
    elementProps,
  };
}

/* -------------------------------------------------------------------------- */
/* Merge Layout Props                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Merges multiple layout prop objects.
 *
 * Later objects override earlier ones.
 */
export function mergeLayoutProps(
  ...props: Array<
    Partial<LayoutProps> | undefined
  >
): LayoutProps {
  return Object.assign({}, ...props);
}

/* -------------------------------------------------------------------------- */
/* Resolve Layout Props                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Normalizes layout props.
 *
 * Reserved for future enhancements such as:
 *
 * - responsive values
 * - CSS variable resolution
 * - design token lookup
 * - RTL support
 */
export function resolveLayoutProps(
  props: LayoutProps,
): LayoutProps {
  return props;
}
