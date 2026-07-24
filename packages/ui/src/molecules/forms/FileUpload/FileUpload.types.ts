/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FileUpload.types.ts
 *
 * Enterprise File Upload types.
 *
 * ============================================================================
 */

import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Upload Status                                                              */
/* -------------------------------------------------------------------------- */

export type FileUploadStatus =
    | "idle"
    | "queued"
    | "uploading"
    | "uploaded"
    | "error"
    | "cancelled";

/* -------------------------------------------------------------------------- */
/* Upload File                                                                */
/* -------------------------------------------------------------------------- */

export interface UploadFile {

    /**
     * Stable unique identifier.
     */
    id: string;

    /**
     * Native browser File.
     */
    file: File;

    /**
     * Upload status.
     */
    status: FileUploadStatus;

    /**
     * Upload progress (0–100).
     */
    progress: number;

    /**
     * Optional preview URL.
     */
    previewUrl?: string;

    /**
     * Upload error.
     */
    error?: string;

    /**
     * Arbitrary metadata.
     */
    metadata?: Record<string, unknown>;

}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadValidation {

    /**
     * Invalid state.
     */
    invalid?: boolean;

    /**
     * Validation message.
     */
    error?: ReactNode;

    /**
     * Helper text.
     */
    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadLabelOptions {

    /**
     * Field label.
     */
    label?: ReactNode;

    /**
     * Required indicator.
     */
    required?: boolean;

    /**
     * Optional label suffix.
     */
    labelSuffix?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Upload Callbacks                                                           */
/* -------------------------------------------------------------------------- */

export interface FileUploadHandlers {

    /**
     * Files selected.
     */
    onFilesChange?(
        files: UploadFile[],
    ): void;

    /**
     * Upload begins.
     */
    onUploadStart?(
        file: UploadFile,
    ): void;

    /**
     * Upload progress.
     */
    onUploadProgress?(
        file: UploadFile,
        progress: number,
    ): void;

    /**
     * Upload success.
     */
    onUploadComplete?(
        file: UploadFile,
    ): void;

    /**
     * Upload failure.
     */
    onUploadError?(
        file: UploadFile,
        error: Error,
    ): void;

    /**
     * File removed.
     */
    onFileRemove?(
        file: UploadFile,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadProps
    extends
        ComponentPropsWithoutRef<"div">,
        FormFileUploadValidation,
        FormFileUploadLabelOptions,
        FileUploadHandlers {

    /**
     * Controlled files.
     */
    files?: UploadFile[];

    /**
     * Default files.
     */
    defaultFiles?: UploadFile[];

    /**
     * Accepted MIME types/extensions.
     *
     * Example:
     *
     * image/*
     * application/pdf
     * .docx
     */
    accept?: string | string[];

    /**
     * Multiple selection.
     */
    multiple?: boolean;

    /**
     * Maximum number of files.
     */
    maxFiles?: number;

    /**
     * Maximum file size in bytes.
     */
    maxFileSize?: number;

    /**
     * Enables drag & drop.
     */
    dragAndDrop?: boolean;

    /**
     * Automatically upload after selection.
     */
    autoUpload?: boolean;

    /**
     * Disabled.
     */
    disabled?: boolean;

    /**
     * Read-only.
     */
    readOnly?: boolean;

    /**
     * Form name.
     */
    name?: string;

    /**
     * Input id.
     */
    id?: string;

    /**
     * Placeholder displayed in the dropzone.
     */
    placeholder?: ReactNode;

    /**
     * Custom upload trigger.
     */
    trigger?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Dropzone                                                                   */
/* -------------------------------------------------------------------------- */

export interface FileUploadDropzoneProps
    extends ComponentPropsWithoutRef<"div"> {}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

export interface FileUploadItemProps
    extends ComponentPropsWithoutRef<"div"> {

    file: UploadFile;

}

/* -------------------------------------------------------------------------- */
/* Preview                                                                    */
/* -------------------------------------------------------------------------- */

export interface FileUploadPreviewProps
    extends ComponentPropsWithoutRef<"div"> {

    file: UploadFile;

}

/* -------------------------------------------------------------------------- */
/* Progress                                                                   */
/* -------------------------------------------------------------------------- */

export interface FileUploadProgressProps
    extends ComponentPropsWithoutRef<"div"> {

    progress: number;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadLabelProps
    extends ComponentPropsWithoutRef<"label"> {

    required?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadDescriptionProps
    extends ComponentPropsWithoutRef<"p"> {}

/* -------------------------------------------------------------------------- */
/* Error                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormFileUploadErrorProps
    extends ComponentPropsWithoutRef<"p"> {}
