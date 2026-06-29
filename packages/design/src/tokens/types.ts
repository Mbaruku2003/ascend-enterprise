import type { colors } from "./colors";
import type { spacing } from "./spacing";
import type { radius } from "./radius";
import type { typography } from "./typography";

export type DesignTokens = {
  colors: typeof colors;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
};
