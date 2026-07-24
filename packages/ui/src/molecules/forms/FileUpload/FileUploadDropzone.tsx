/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FileUploadDropzone.tsx
 *
 * Enterprise File Upload Dropzone.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useCallback,
    useRef,
    useState,
} from "react";

import {
    Upload,
} from "lucide-react";

import { cn } from "@/utils";

import type {
    DragEvent,
    ChangeEvent,
} from "react";

interface FileUploadDropzoneProps {

    id?: string;

    accept?: string;

    multiple?: boolean;

    disabled?: boolean;

    readOnly?: boolean;

    invalid?: boolean;

    placeholder?: React.ReactNode;

    className?: string;

    "aria-describedby"?: string;

    onFilesSelected?(
        files: File[],
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FileUploadDropzone =
forwardRef<
HTMLDivElement,
FileUploadDropzoneProps
>(

function FileUploadDropzone(

{

    id,

    accept,

    multiple = false,

    disabled = false,

    readOnly = false,

    invalid = false,

    placeholder,

    className,

    onFilesSelected,

    ...props

},

forwardedRef,

) {

    const inputRef =
        useRef<HTMLInputElement>(null);

    const [

        dragging,

        setDragging,

    ] = useState(false);

    const openPicker = useCallback(() => {

        if (

            disabled ||

            readOnly

        ) {

            return;

        }

        inputRef.current?.click();

    }, [

        disabled,

        readOnly,

    ]);

    const handleChange = (

        event: ChangeEvent<HTMLInputElement>,

    ) => {

        const files =

            Array.from(

                event.target.files ?? [],

            );

        if (

            files.length > 0

        ) {

            onFilesSelected?.(

                files,

            );

        }

        event.target.value = "";

    };

    const handleDragEnter = (

        event: DragEvent<HTMLDivElement>,

    ) => {

        event.preventDefault();

        if (

            disabled ||

            readOnly

        ) {

            return;

        }

        setDragging(true);

    };

    const handleDragLeave = (

        event: DragEvent<HTMLDivElement>,

    ) => {

        event.preventDefault();

        setDragging(false);

    };

    const handleDragOver = (

        event: DragEvent<HTMLDivElement>,

    ) => {

        event.preventDefault();

    };

    const handleDrop = (

        event: DragEvent<HTMLDivElement>,

    ) => {

        event.preventDefault();

        setDragging(false);

        if (

            disabled ||

            readOnly

        ) {

            return;

        }

        const files =

            Array.from(

                event.dataTransfer.files,

            );

        if (

            files.length > 0

        ) {

            onFilesSelected?.(

                files,

            );

        }

    };

    return (

        <>

            <input

                ref={inputRef}

                id={id}

                hidden

                type="file"

                accept={accept}

                multiple={multiple}

                onChange={handleChange}

                disabled={disabled}

            />

            <div

                {...props}

                ref={forwardedRef}

                role="button"

                tabIndex={

                    disabled

                        ? -1

                        : 0

                }

                aria-disabled={disabled}

                aria-invalid={

                    invalid ||

                    undefined

                }

                onClick={openPicker}

                onKeyDown={(event) => {

                    if (

                        event.key === "Enter" ||

                        event.key === " "

                    ) {

                        event.preventDefault();

                        openPicker();

                    }

                }}

                onDragEnter={handleDragEnter}

                onDragLeave={handleDragLeave}

                onDragOver={handleDragOver}

                onDrop={handleDrop}

                className={cn(

                    "flex",

                    "min-h-40",

                    "cursor-pointer",

                    "flex-col",

                    "items-center",

                    "justify-center",

                    "rounded-xl",

                    "border-2",

                    "border-dashed",

                    "transition-colors",

                    dragging &&

                        "border-primary bg-primary/5",

                    invalid &&

                        "border-destructive",

                    disabled &&

                        "cursor-not-allowed opacity-60",

                    !dragging &&
                        !invalid &&
                        "border-border",

                    className,

                )}

            >

                <Upload

                    className="
                        mb-3
                        h-10
                        w-10
                        text-muted-foreground
                    "

                />

                <div

                    className="
                        text-center
                    "

                >

                    {placeholder ?? (

                        <>

                            <p className="font-medium">

                                Drag & drop files here

                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">

                                or click to browse

                            </p>

                        </>

                    )}

                </div>

            </div>

        </>

    );

},

);

FileUploadDropzone.displayName =
    "FileUploadDropzone";

export default FileUploadDropzone;
