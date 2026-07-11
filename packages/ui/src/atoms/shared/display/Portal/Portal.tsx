/**
 * ============================================================================
 * Ascend UI
 * Portal
 * ============================================================================
 */

import {
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";

import type {
  PortalProps,
} from "./Portal.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function Portal({
  children,

  container,

  disabled = false,
}: PortalProps) {
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    return () =>
      setMounted(false);
  }, []);

  if (disabled) {
    return <>{children}</>;
  }

  if (!mounted) {
    return null;
  }

  const target =
    container ?? document.body;

  return createPortal(
    children,
    target,
  );
}

Portal.displayName =
  "Portal";

export default Portal;
