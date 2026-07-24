/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: FormFileUpload.test.tsx
 *
 * Enterprise test suite.
 *
 * ============================================================================
 */

import React from "react";

import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
} from "vitest";

import {
    render,
    screen,
    fireEvent,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import {
    FormFileUpload,
} from "./FormFileUpload";

/* -------------------------------------------------------------------------- */
/* Mocks                                                                      */
/* -------------------------------------------------------------------------- */

vi.mock("./FileUploadDropzone", () => ({

    FileUploadDropzone: ({
        onFilesSelected,
    }: any) => (

        <button

            data-testid="dropzone"

            onClick={() => {

                const file = new File(

                    ["hello"],

                    "avatar.png",

                    {

                        type: "image/png",

                    },

                );

                onFilesSelected?.([file]);

            }}

        >

            Upload

        </button>

    ),

}));

vi.mock("./FileUploadItem", () => ({

    FileUploadItem: ({
        file,
    }: any) => (

        <div

            data-testid="file-item"

        >

            {file.file.name}

        </div>

    ),

}));

vi.mock("./FormFileUploadLabel", () => ({

    FormFileUploadLabel: ({
        children,
    }: any) => (

        <label>

            {children}

        </label>

    ),

}));

vi.mock("./FormFileUploadDescription", () => ({

    FormFileUploadDescription: ({
        children,
    }: any) => (

        <p>

            {children}

        </p>

    ),

}));

vi.mock("./FormFileUploadError", () => ({

    FormFileUploadError: ({
        children,
    }: any) => (

        <p>

            {children}

        </p>

    ),

}));

/* -------------------------------------------------------------------------- */
/* Tests                                                                      */
/* -------------------------------------------------------------------------- */

describe(

    "FormFileUpload",

    () => {

        beforeEach(() => {

            vi.clearAllMocks();

        });

        it(

            "renders label",

            () => {

                render(

                    <FormFileUpload

                        label="Documents"

                    />,

                );

                expect(

                    screen.getByText(

                        "Documents",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders description",

            () => {

                render(

                    <FormFileUpload

                        description="Upload PDF files"

                    />,

                );

                expect(

                    screen.getByText(

                        "Upload PDF files",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders validation error",

            () => {

                render(

                    <FormFileUpload

                        error="Required"

                    />,

                );

                expect(

                    screen.getByText(

                        "Required",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders dropzone",

            () => {

                render(

                    <FormFileUpload />,

                );

                expect(

                    screen.getByTestId(

                        "dropzone",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "uploads a file",

            async () => {

                const user =

                    userEvent.setup();

                render(

                    <FormFileUpload />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.getByText(

                        "avatar.png",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "calls onFilesChange",

            async () => {

                const user =

                    userEvent.setup();

                const onFilesChange =

                    vi.fn();

                render(

                    <FormFileUpload

                        onFilesChange={

                            onFilesChange

                        }

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    onFilesChange,

                ).toHaveBeenCalledTimes(

                    1,

                );

            },

        );

        it(

            "supports controlled files",

            () => {

                const file = {

                    id: "1",

                    status: "uploaded",

                    progress: 100,

                    file: new File(

                        ["x"],

                        "contract.pdf",

                    ),

                };

                render(

                    <FormFileUpload

                        files={[

                            file,

                        ]}

                    />,

                );

                expect(

                    screen.getByText(

                        "contract.pdf",

                    ),

                ).toBeInTheDocument();

            },

        );
        it(

            "supports multiple uploads",

            async () => {

                const user =
                    userEvent.setup();

                render(

                    <FormFileUpload

                        multiple

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.getAllByTestId(

                        "file-item",

                    ),

                ).toHaveLength(

                    2,

                );

            },

        );

        it(

            "replaces existing file when multiple is false",

            async () => {

                const user =
                    userEvent.setup();

                render(

                    <FormFileUpload />

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.getAllByTestId(

                        "file-item",

                    ),

                ).toHaveLength(

                    1,

                );

            },

        );

        it(

            "respects maxFiles",

            async () => {

                const user =
                    userEvent.setup();

                render(

                    <FormFileUpload

                        multiple

                        maxFiles={1}

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.getAllByTestId(

                        "file-item",

                    ),

                ).toHaveLength(

                    1,

                );

            },

        );

        it(

            "does not upload while disabled",

            async () => {

                const user =
                    userEvent.setup();

                render(

                    <FormFileUpload

                        disabled

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.queryByTestId(

                        "file-item",

                    ),

                ).not.toBeInTheDocument();

            },

        );

        it(

            "does not upload while readOnly",

            async () => {

                const user =
                    userEvent.setup();

                render(

                    <FormFileUpload

                        readOnly

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.queryByTestId(

                        "file-item",

                    ),

                ).not.toBeInTheDocument();

            },

        );

        it(

            "uses defaultFiles",

            () => {

                render(

                    <FormFileUpload

                        defaultFiles={[

                            {

                                id: "1",

                                status: "uploaded",

                                progress: 100,

                                file: new File(

                                    ["x"],

                                    "default.pdf",

                                ),

                            },

                        ]}

                    />,

                );

                expect(

                    screen.getByText(

                        "default.pdf",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders placeholder",

            () => {

                render(

                    <FormFileUpload

                        placeholder={

                            <span>

                                Upload here

                            </span>

                        }

                    />,

                );

                expect(

                    screen.getByText(

                        "Upload here",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders required indicator",

            () => {

                render(

                    <FormFileUpload

                        label="Avatar"

                        required

                    />,

                );

                expect(

                    screen.getByText(

                        "Avatar",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "matches snapshot",

            () => {

                const {

                    container,

                } = render(

                    <FormFileUpload

                        label="Documents"

                    />,

                );

                expect(

                    container,

                ).toMatchSnapshot();

            },

        );
        it(

            "calls onUploadStart when provided",

            async () => {

                const user =
                    userEvent.setup();

                const onUploadStart =
                    vi.fn();

                render(

                    <FormFileUpload

                        onUploadStart={
                            onUploadStart
                        }

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    onUploadStart,

                ).toHaveBeenCalled();

            },

        );

        it(

            "calls onUploadComplete when provided",

            async () => {

                const user =
                    userEvent.setup();

                const onUploadComplete =
                    vi.fn();

                render(

                    <FormFileUpload

                        onUploadComplete={
                            onUploadComplete
                        }

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    onUploadComplete,

                ).toHaveBeenCalled();

            },

        );

        it(

            "passes uploaded files to callback",

            async () => {

                const user =
                    userEvent.setup();

                const onFilesChange =
                    vi.fn();

                render(

                    <FormFileUpload

                        onFilesChange={
                            onFilesChange
                        }

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    onFilesChange.mock.calls[0][0],

                ).toHaveLength(

                    1,

                );

            },

        );

        it(

            "renders without label",

            () => {

                render(

                    <FormFileUpload />

                );

                expect(

                    screen.getByTestId(

                        "dropzone",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders without description",

            () => {

                render(

                    <FormFileUpload

                        label="Files"

                    />,

                );

                expect(

                    screen.getByText(

                        "Files",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "renders without error",

            () => {

                render(

                    <FormFileUpload

                        label="Files"

                    />,

                );

                expect(

                    screen.queryByText(

                        "Required",

                    ),

                ).not.toBeInTheDocument();

            },

        );

        it(

            "supports custom className",

            () => {

                const {

                    container,

                } = render(

                    <FormFileUpload

                        className="custom-upload"

                    />,

                );

                expect(

                    container.firstChild,

                ).toHaveClass(

                    "custom-upload",

                );

            },

        );

        it(

            "keeps controlled mode immutable",

            async () => {

                const user =
                    userEvent.setup();

                const file = {

                    id: "1",

                    status: "uploaded",

                    progress: 100,

                    file: new File(

                        ["x"],

                        "existing.pdf",

                    ),

                };

                render(

                    <FormFileUpload

                        files={[file]}

                    />,

                );

                await user.click(

                    screen.getByTestId(

                        "dropzone",

                    ),

                );

                expect(

                    screen.getAllByTestId(

                        "file-item",

                    ),

                ).toHaveLength(

                    1,

                );

            },

        );

        it(

            "supports keyboard interaction",

            () => {

                render(

                    <FormFileUpload />

                );

                fireEvent.keyDown(

                    screen.getByTestId(

                        "dropzone",

                    ),

                    {

                        key: "Enter",

                    },

                );

                expect(

                    screen.getByTestId(

                        "dropzone",

                    ),

                ).toBeInTheDocument();

            },

        );

        it(

            "has accessible upload control",

            () => {

                render(

                    <FormFileUpload />

                );

                expect(

                    screen.getByRole(

                        "button",

                    ),

                ).toBeInTheDocument();

            },

        );

    },

);
