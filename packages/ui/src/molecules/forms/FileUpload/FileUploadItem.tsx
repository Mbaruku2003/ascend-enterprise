/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FileUploadItem.tsx
 *
 * Displays an uploaded file.
 *
 * ============================================================================
 */

import { forwardRef } from "react";

import {
    File,
    Image,
    FileText,
    Film,
    Music,
    X,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";

import { cn } from "@/utils";

import { FileUploadPreview } from "./FileUploadPreview";
import { FileUploadProgress } from "./FileUploadProgress";

import type {
    FileUploadItemProps,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function getFileIcon(type: string) {

    if (type.startsWith("image/")) {
        return Image;
    }

    if (type.startsWith("video/")) {
        return Film;
    }

    if (type.startsWith("audio/")) {
        return Music;
    }

    if (
        type.includes("pdf") ||
        type.includes("word") ||
        type.includes("text") ||
        type.includes("sheet")
    ) {
        return FileText;
    }

    return File;

}

function formatBytes(bytes: number): string {

    if (bytes === 0) {
        return "0 B";
    }

    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
    ];

    const index = Math.floor(
        Math.log(bytes) / Math.log(1024),
    );

    return `${(
        bytes /
        Math.pow(1024, index)
    ).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FileUploadItem =
forwardRef<
HTMLDivElement,
FileUploadItemProps
>(

function FileUploadItem(

{

    file,

    className,

    onRemove,

    ...props

},

forwardedRef,

) {

    const Icon = getFileIcon(
        file.file.type,
    );

    return (

        <div

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "items-center",

                "gap-4",

                "rounded-lg",

                "border",

                "bg-background",

                "p-4",

                className,

            )}

        >

            <FileUploadPreview

                file={file}

            >

                <Icon

                    className="
                        h-8
                        w-8
                        text-muted-foreground
                    "

                />

            </FileUploadPreview>

            <div

                className="
                    min-w-0
                    flex-1
                "

            >

                <p

                    className="
                        truncate
                        font-medium
                    "

                >

                    {file.file.name}

                </p>

                <p

                    className="
                        text-sm
                        text-muted-foreground
                    "

                >

                    {formatBytes(

                        file.file.size,

                    )}

                </p>

                {

                    file.status ===
                        "uploading" && (

                        <div className="mt-2">

                            <FileUploadProgress

                                progress={

                                    file.progress

                                }

                            />

                        </div>

                    )

                }

                {

                    file.error && (

                        <p

                            className="
                                mt-1
                                text-sm
                                text-destructive
                            "

                        >

                            {file.error}

                        </p>

                    )

                }

            </div>

            <div

                className="
                    flex
                    items-center
                    gap-2
                "

            >

                {

                    file.status ===
                        "uploaded" && (

                        <CheckCircle2

                            className="
                                h-5
                                w-5
                                text-green-600
                            "

                        />

                    )

                }

                {

                    file.status ===
                        "uploading" && (

                        <Loader2

                            className="
                                h-5
                                w-5
                                animate-spin
                                text-primary
                            "

                        />

                    )

                }

                {

                    file.status ===
                        "error" && (

                        <AlertCircle

                            className="
                                h-5
                                w-5
                                text-destructive
                            "

                        />

                    )

                }

                {

                    onRemove && (

                        <button

                            type="button"

                            aria-label="Remove file"

                            onClick={onRemove}

                            className="
                                rounded-md
                                p-1
                                transition-colors
                                hover:bg-muted
                            "

                        >

                            <X

                                className="
                                    h-4
                                    w-4
                                "

                            />

                        </button>

                    )

                }

            </div>

        </div>

    );

},

);

FileUploadItem.displayName =
    "FileUploadItem";

export default FileUploadItem;
