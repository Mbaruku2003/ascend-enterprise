import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import {
    FormSelect,
} from "./FormSelect";

import {
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
} from "@/shared/overlay/Select";

describe("FormSelect", () => {

    function BasicSelect() {

        return (

            <FormSelect

                label="Role"

                placeholder="Select a role"

            >

                <SelectGroup>

                    <SelectLabel>

                        Users

                    </SelectLabel>

                    <SelectItem value="admin">

                        Administrator

                    </SelectItem>

                    <SelectItem value="editor">

                        Editor

                    </SelectItem>

                    <SelectSeparator />

                    <SelectItem value="viewer">

                        Viewer

                    </SelectItem>

                </SelectGroup>

            </FormSelect>

        );

    }

    it("renders label", () => {

        render(

            <BasicSelect />

        );

        expect(

            screen.getByText("Role"),

        ).toBeInTheDocument();

    });

    it("renders trigger", () => {

        render(

            <BasicSelect />

        );

        expect(

            screen.getByRole("button"),

        ).toBeInTheDocument();

    });

    it("opens the overlay", () => {

        render(

            <BasicSelect />

        );

        fireEvent.click(

            screen.getByRole("button"),

        );

        expect(

            screen.getByText(

                "Administrator",

            ),

        ).toBeInTheDocument();

    });

    it("renders placeholder", () => {

        render(

            <BasicSelect />

        );

        expect(

            screen.getByText(

                "Select a role",

            ),

        ).toBeInTheDocument();

    });

    it("renders description", () => {

        render(

            <FormSelect

                label="Role"

                description="Choose one."

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByText(

                "Choose one.",

            ),

        ).toBeInTheDocument();

    });

    it("renders validation error", () => {

        render(

            <FormSelect

                label="Role"

                error="Required"

                invalid

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByText(

                "Required",

            ),

        ).toBeInTheDocument();

    });

    it("marks trigger invalid", () => {

        render(

            <FormSelect

                invalid

                error="Required"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toHaveAttribute(

            "aria-invalid",

            "true",

        );

    });

});
describe("FormSelect interactions", () => {

    function ControlledSelect() {

        return (

            <FormSelect

                value="editor"

                placeholder="Select role"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

                <SelectItem value="editor">

                    Editor

                </SelectItem>

                <SelectItem value="viewer">

                    Viewer

                </SelectItem>

            </FormSelect>

        );

    }

    it("supports controlled value", () => {

        render(

            <ControlledSelect />

        );

        expect(

            screen.getByRole("button"),

        ).toBeInTheDocument();

    });

    it("opens when trigger is clicked", () => {

        render(

            <ControlledSelect />

        );

        fireEvent.click(

            screen.getByRole("button"),

        );

        expect(

            screen.getByText("Administrator"),

        ).toBeInTheDocument();

    });

    it("renders all options", () => {

        render(

            <ControlledSelect />

        );

        fireEvent.click(

            screen.getByRole("button"),

        );

        expect(

            screen.getByText("Administrator"),

        ).toBeInTheDocument();

        expect(

            screen.getByText("Editor"),

        ).toBeInTheDocument();

        expect(

            screen.getByText("Viewer"),

        ).toBeInTheDocument();

    });

    it("supports required label", () => {

        render(

            <FormSelect

                label="Role"

                required

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByText("*"),

        ).toBeInTheDocument();

    });

    it("wires aria-describedby for description", () => {

        render(

            <FormSelect

                id="role"

                description="Select one role"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toHaveAttribute(

            "aria-describedby",

            "role-description",

        );

    });

    it("wires aria-describedby for errors", () => {

        render(

            <FormSelect

                id="role"

                invalid

                error="Role required"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toHaveAttribute(

            "aria-describedby",

            "role-error",

        );

    });

    it("renders label suffix", () => {

        render(

            <FormSelect

                label="Role"

                labelSuffix={

                    <span>

                        (optional)

                    </span>

                }

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByText("(optional)"),

        ).toBeInTheDocument();

    });

    it("does not render description when error exists", () => {

        render(

            <FormSelect

                description="Helpful text"

                error="Validation failed"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.queryByText(

                "Helpful text",

            ),

        ).not.toBeInTheDocument();

        expect(

            screen.getByText(

                "Validation failed",

            ),

        ).toBeInTheDocument();

    });

});
describe("FormSelect accessibility & regression", () => {

    it("supports disabled state", () => {

        render(

            <FormSelect

                disabled

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toBeDisabled();

    });

    it("supports readOnly state", () => {

        render(

            <FormSelect

                readOnly

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toHaveAttribute(

            "aria-readonly",

            "true",

        );

    });

    it("forwards id to trigger", () => {

        render(

            <FormSelect

                id="user-role"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.getByRole("button"),

        ).toHaveAttribute(

            "id",

            "user-role",

        );

    });

    it("renders helper text only when provided", () => {

        render(

            <FormSelect>

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.queryByText(

                /help/i,

            ),

        ).not.toBeInTheDocument();

    });

    it("does not render error component when error is undefined", () => {

        render(

            <FormSelect>

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            screen.queryByRole(

                "alert",

            ),

        ).not.toBeInTheDocument();

    });

    it("opens with keyboard", () => {

        render(

            <FormSelect>

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        const trigger =

            screen.getByRole(

                "button",

            );

        trigger.focus();

        fireEvent.keyDown(

            trigger,

            {

                key: "Enter",

            },

        );

        expect(

            screen.getByText(

                "Administrator",

            ),

        ).toBeInTheDocument();

    });

    it("supports custom className", () => {

        render(

            <FormSelect

                className="custom-select"

            >

                <SelectItem value="admin">

                    Administrator

                </SelectItem>

            </FormSelect>

        );

        expect(

            document.querySelector(

                ".custom-select",

            ),

        ).toBeInTheDocument();

    });

    it("renders multiple option groups", () => {

        render(

            <FormSelect>

                <SelectGroup>

                    <SelectLabel>

                        Administrators

                    </SelectLabel>

                    <SelectItem value="admin">

                        Administrator

                    </SelectItem>

                </SelectGroup>

                <SelectGroup>

                    <SelectLabel>

                        Editors

                    </SelectLabel>

                    <SelectItem value="editor">

                        Editor

                    </SelectItem>

                </SelectGroup>

            </FormSelect>

        );

        fireEvent.click(

            screen.getByRole(

                "button",

            ),

        );

        expect(

            screen.getByText(

                "Administrators",

            ),

        ).toBeInTheDocument();

        expect(

            screen.getByText(

                "Editors",

            ),

        ).toBeInTheDocument();

    });

    it("renders separator correctly", () => {

        render(

            <FormSelect>

                <SelectItem value="a">

                    A

                </SelectItem>

                <SelectSeparator />
                <SelectItem value="b">

                    B

                </SelectItem>

            </FormSelect>

        );

        fireEvent.click(

            screen.getByRole(

                "button",

            ),

        );

        expect(

            screen.getByText("A"),

        ).toBeInTheDocument();

        expect(

            screen.getByText("B"),

        ).toBeInTheDocument();

    });

    it("renders without crashing with empty children", () => {

        render(

            <FormSelect>

                <></>

            </FormSelect>

        );

        expect(

            screen.getByRole(

                "button",

            ),

        ).toBeInTheDocument();

    });

});
