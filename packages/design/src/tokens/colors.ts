export const colors = {
  brand: {
    primary: "#5B5FEF",
    secondary: "#7C4DFF",
    accent: "#22D3EE",
  },

  background: {
    primary: "#09090B",
    secondary: "#18181B",
    tertiary: "#27272A",
    glass: "rgba(255,255,255,0.06)",
  },

  surface: {
    primary: "#18181B",
    secondary: "#27272A",
    elevated: "#323238",
  },

  text: {
    primary: "#FAFAFA",
    secondary: "#D4D4D8",
    muted: "#A1A1AA",
    disabled: "#71717A",
  },

  border: {
    subtle: "#27272A",
    default: "#3F3F46",
    strong: "#52525B",
  },

  status: {
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#3B82F6",
  },
} as const;

export type Colors = typeof colors;
