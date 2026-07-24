/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormFileUpload.tsx
 *
 * Enterprise File Upload.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useMemo,
    useState,
} from "react";

import { cn } from "@/utils";

import { FileUploadDropzone } from "./FileUploadDropzone";
import { FileUploadItem } from "./FileUploadItem";
import { FormFileUploadLabel } from "./FormFileUploadLabel";
import { FormFileUploadDescription } from "./FormFileUploadDescription";
import { FormFileUploadError } from "./FormFileUploadError";

import type {
    FormFileUploadProps,
    UploadFile,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function createUploadFile(
    file: File,
): UploadFile {

    return {

        id:
            typeof crypto !== "undefined" &&
            "randomUUID" in crypto
                ? crypto.randomUUID()
                : `${file.name}-${file.size}-${file.lastModified}`,

        file,

        status: "idle",

        progress: 0,

    };

}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FormFileUpload =
forwardRef<
HTMLDivElement,
FormFileUploadProps
>(

function FormFileUpload(

{

    className,

    label,
    required,
    labelSuffix,

    description,
    error,
    invalid = false,

    files: controlledFiles,
    defaultFiles = [],

    onFilesChange,

    accept,
    multiple = false,

    maxFiles,

    disabled = false,
    readOnly = false,

    id,
    name,

    placeholder,

    ...props

},

forwardedRef,

) {

    const [

        uncontrolledFiles,

        setUncontrolledFiles,

    ] = useState<UploadFile[]>(

        defaultFiles,

    );

    const files =

        controlledFiles ??

        uncontrolledFiles;

    const fieldId =

        id ??

        name;

    const descriptionId =

        description && fieldId

            ? `${fieldId}-description`

            : undefined;

    const errorId =

        error && fieldId

            ? `${fieldId}-error`

            : undefined;

    const describedBy =

        [descriptionId, errorId]

            .filter(Boolean)

            .join(" ")

            || undefined;

    const acceptValue = useMemo(

        () => {

            if (

                Array.isArray(

                    accept,

                )

            ) {

                return accept.join(",");

            }

            return accept;

        },

        [accept],

    );

    function updateFiles(

        next: UploadFile[],

    ) {

        if (

            controlledFiles === undefined

        ) {

            setUncontrolledFiles(

                next,

            );

        }

        onFilesChange?.(

            next,

        );

    }

    function handleFiles(

        selected: File[],

    ) {

        if (

            disabled ||

            readOnly

        ) {

            return;

        }

        let next =

            selected.map(

                createUploadFile,

            );

        if (

            maxFiles !== undefined

        ) {

            next = next.slice(

                0,

                maxFiles,

            );

        }

        updateFiles(

            multiple

                ? [

                      ...files,

                      ...next,

                  ]

                : next.slice(

                      0,

                      1,

                  ),

        );

    }

    function handleRemove(

        id: string,

    ) {

        const next =

            files.filter(

                file =>

                    file.id !== id,

            );

        updateFiles(

            next,

        );

    }

    return (

        <div

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "flex-col",

                "gap-3",

                className,

            )}

        >

            {label && (

                <FormFileUploadLabel

                    htmlFor={fieldId}

                    required={required}

                >

                    {label}

                    {labelSuffix}

                </FormFileUploadLabel>

            )}

            <FileUploadDropzone

                id={fieldId}

                accept={acceptValue}

                multiple={multiple}

                disabled={disabled}

                readOnly={readOnly}

                invalid={invalid}

                aria-describedby={describedBy}

                placeholder={placeholder}

                onFilesSelected={handleFiles}

            />

            {

                files.length > 0 && (

                    <div

                        className="flex flex-col gap-2"

                    >

                        {

                            files.map(

                                file => (

                                    <FileUploadItem

                                        key={file.id}

                                        file={file}

                                        onRemove={() =>

                                            handleRemove(

                                                file.id,

                                            )

                                        }

                                    />

                                ),

                            )

                        }

                    </div>

                )

            }

            {

                description &&

                !error && (

                    <FormFileUploadDescription

                        id={descriptionId}

                    >

                        {description}

                    </FormFileUploadDescription>

                )

            }

            {

                error && (

                    <FormFileUploadError

                        id={errorId}

                    >

                        {error}

                    </FormFileUploadError>

                )

            }

        </div>

    );

},

);

FormFileUpload.displayName =
    "FormFileUpload";

export default FormFileUpload;
