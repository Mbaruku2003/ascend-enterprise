/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FileUploadProgress.tsx
 *
 * Enterprise upload progress indicator.
 *
 * ============================================================================
 */

import {
    forwardRef,
} from "react";

import {
    CheckCircle2,
} from "lucide-react";

import {
    Progress,
} from "@/atoms/feedback/Progress";

import {
    Text,
} from "@/atoms/typography/Text";

import {
    cn,
} from "@/utils";

import type {
    FileUploadProgressProps,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FileUploadProgress =
forwardRef<
HTMLDivElement,
FileUploadProgressProps
>(

function FileUploadProgress(

{

    progress,

    className,

    ...props

},

forwardedRef,

) {

    const value =

        Math.min(

            Math.max(progress, 0),

            100,

        );

    const completed =

        value >= 100;

    return (

        <div

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "flex-col",

                "gap-2",

                className,

            )}

        >

            <div

                className="
                    flex
                    items-center
                    justify-between
                "

            >

                <Text

                    as="span"

                    size="xs"

                    tone="muted"

                >

                    {

                        completed

                            ? "Upload complete"

                            : "Uploading..."

                    }

                </Text>

                <div

                    className="
                        flex
                        items-center
                        gap-1
                    "

                >

                    {

                        completed && (

                            <CheckCircle2

                                aria-hidden="true"

                                className="
                                    h-4
                                    w-4
                                    text-success
                                "

                            />

                        )

                    }

                    <Text

                        as="span"

                        size="xs"

                        tone="muted"

                    >

                        {value}%

                    </Text>

                </div>

            </div>

            <Progress

                value={value}

                aria-label="Upload progress"

            />

        </div>

    );

},

);

FileUploadProgress.displayName =
    "FileUploadProgress";

export default FileUploadProgress;
