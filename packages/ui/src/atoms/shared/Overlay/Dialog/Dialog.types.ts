import type {
    ReactNode,
    RefObject,
} from "react";

export interface DialogProps {

    children: ReactNode;

    open?: boolean;

    defaultOpen?: boolean;

    modal?: boolean;

    portal?: boolean;

    closeOnEscape?: boolean;

    closeOnPointerDownOutside?: boolean;

    closeOnInteractOutside?: boolean;

    onOpenChange?(open: boolean): void;
}

export interface DialogContextValue {

    open: boolean;

    modal: boolean;

    portal: boolean;

    closeOnEscape: boolean;

    closeOnPointerDownOutside: boolean;

    closeOnInteractOutside: boolean;

    titleId: string;

    descriptionId: string;

    triggerRef: RefObject<HTMLElement>;

    contentRef: RefObject<HTMLDivElement>;

    setOpen(open: boolean): void;

    openDialog(): void;

    closeDialog(): void;

    toggleDialog(): void;
}
