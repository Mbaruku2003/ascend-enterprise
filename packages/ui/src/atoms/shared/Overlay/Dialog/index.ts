/**
 * ============================================================================
 * Ascend UI
 * Dialog
 * ============================================================================
 *
 * Public exports for the Dialog component suite.
 */

// Root
export { default } from "./Dialog";
export { Dialog } from "./Dialog";

// Context
export { useDialogContext } from "./DialogContext";

// Components
export { default as DialogPortal } from "./DialogPortal";
export { DialogPortal } from "./DialogPortal";

export { default as DialogOverlay } from "./DialogOverlay";
export { DialogOverlay } from "./DialogOverlay";

export { default as DialogContent } from "./DialogContent";
export { DialogContent } from "./DialogContent";

export { default as DialogHeader } from "./DialogHeader";
export { DialogHeader } from "./DialogHeader";

export { default as DialogBody } from "./DialogBody";
export { DialogBody } from "./DialogBody";

export { default as DialogFooter } from "./DialogFooter";
export { DialogFooter } from "./DialogFooter";

export { default as DialogTitle } from "./DialogTitle";
export { DialogTitle } from "./DialogTitle";

export { default as DialogDescription } from "./DialogDescription";
export { DialogDescription } from "./DialogDescription";

export { default as DialogTrigger } from "./DialogTrigger";
export { DialogTrigger } from "./DialogTrigger";

export { default as DialogClose } from "./DialogClose";
export { DialogClose } from "./DialogClose";

// Types
export type {
    DialogProps,
    DialogContextValue,
} from "./Dialog.types";

// Constants
export * from "./dialog.constants";

// Styles
export * from "./Dialog.styles";
