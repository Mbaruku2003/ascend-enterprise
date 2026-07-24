/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FileUploadPreview.tsx
 *
 * File preview component.
 *
 * Renders image previews when available and falls back to children for all
 * other file types.
 *
 * ============================================================================
 */

import {
    forwardRef,
    useEffect,
    useMemo,
    useState,
} from "react";

import { cn } from "@/utils";

import type {
    ReactNode,
} from "react";

import type {
    FileUploadPreviewProps,
} from "./FileUpload.types";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const FileUploadPreview =
forwardRef<
HTMLDivElement,
FileUploadPreviewProps & {

    children?: ReactNode;

}
>(

function FileUploadPreview(

{

    file,

    children,

    className,

    ...props

},

forwardedRef,

) {

    const [

        objectUrl,

        setObjectUrl,

    ] = useState<string>();

    const isImage = useMemo(

        () =>

            file.file.type.startsWith(

                "image/",

            ),

        [file.file.type],

    );

    useEffect(() => {

        if (

            file.previewUrl

        ) {

            setObjectUrl(

                file.previewUrl,

            );

            return;

        }

        if (

            !isImage

        ) {

            return;

        }

        const url = URL.createObjectURL(

            file.file,

        );

        setObjectUrl(

            url,

        );

        return () => {

            URL.revokeObjectURL(

                url,

            );

        };

    }, [

        file,

        isImage,

    ]);

    return (

        <div

            {...props}

            ref={forwardedRef}

            className={cn(

                "flex",

                "h-16",

                "w-16",

                "shrink-0",

                "items-center",

                "justify-center",

                "overflow-hidden",

                "rounded-lg",

                "border",

                "bg-muted",

                className,

            )}

        >

            {

                isImage &&

                objectUrl ? (

                    <img

                        src={objectUrl}

                        alt={file.file.name}

                        draggable={false}

                        className="
                            h-full
                            w-full
                            object-cover
                        "

                    />

                ) : (

                    children

                )

            }

        </div>

    );

},

);

FileUploadPreview.displayName =
    "FileUploadPreview";

export default FileUploadPreview;
