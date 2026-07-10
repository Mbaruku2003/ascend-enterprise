import { forwardRef } from "react";

import { cn } from "../../utils";

import Box from "../Box";

import {
  DEFAULT_CLUSTER_ALIGN,
  DEFAULT_CLUSTER_GAP,
  DEFAULT_CLUSTER_JUSTIFY,
  resolveClusterClasses,
} from "./Cluster.styles";

import type {
  ClusterProps,
} from "./Cluster.types";

/* -------------------------------------------------------------------------- */

export const Cluster = forwardRef<
  HTMLDivElement,
  ClusterProps
>(
  (
    {
      gap = DEFAULT_CLUSTER_GAP,

      align = DEFAULT_CLUSTER_ALIGN,

      justify =
        DEFAULT_CLUSTER_JUSTIFY,

      className,

      children,

      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        ...resolveClusterClasses(
          gap,
          align,
          justify,
        ),
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  ),
);

Cluster.displayName =
  "Cluster";

export default Cluster;
