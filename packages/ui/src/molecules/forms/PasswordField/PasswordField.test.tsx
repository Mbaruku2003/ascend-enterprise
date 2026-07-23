/**
 * ============================================================================
 * Ascend Enterprise UI
 * PasswordField
 * ----------------------------------------------------------------------------
 * File: PasswordField.test.tsx
 *
 * Integration tests for PasswordField.
 *
 * ============================================================================
 */

import {
    describe,
    expect,
    it,
} from "vitest";

import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";

import {
    PasswordField,
} from "./PasswordField";

/* -------------------------------------------------------------------------- */
/* Tests                                                                      */
/* -------------------------------------------------------------------------- */

describe("PasswordField", () => {

    it("renders successfully", () => {

        render(

            <PasswordField />

        );

        expect(

            screen.getByLabelText(
                /show password/i,
            ),

        ).toBeInTheDocument();

    });

    it("renders the password input", () => {

        render(

            <PasswordField />

        );

        expect(

            screen.getByDisplayValue(""),

        ).toHaveAttribute(

            "type",

            "password",

        );

    });

    it("renders the toggle button by default", () => {

        render(

            <PasswordField />

        );

        expect(

            screen.getByRole(

                "button",

                {

                    name: /show password/i,

                },

            ),

        ).toBeInTheDocument();

    });

    it("does not render the toggle when disabled", () => {

        render(

            <PasswordField

                showToggle={false}

            />,

        );

        expect(

            screen.queryByRole(

                "button",

            ),

        ).not.toBeInTheDocument();

    });

    it("does not render the strength meter by default", () => {

        render(

            <PasswordField />

        );

        expect(

            screen.queryByText(

                /password strength/i,

            ),

        ).not.toBeInTheDocument();

    });

    it("renders the strength meter when enabled", () => {

        render(

            <PasswordField

                showStrength

            />,

        );

        expect(

            screen.getByText(

                /password strength/i,

            ),

        ).toBeInTheDocument();

    });

    it("toggles password visibility", () => {

        render(

            <PasswordField />

        );

        const input =

            screen.getByDisplayValue("") as HTMLInputElement;

        const button =

            screen.getByRole(

                "button",

                {

                    name: /show password/i,

                },

            );

        expect(

            input.type,

        ).toBe(

            "password",

        );

        fireEvent.click(

            button,

        );

        expect(

            input.type,

        ).toBe(

            "text",

        );

        expect(

            button,

        ).toHaveAttribute(

            "aria-label",

            "Hide password",

        );

    });

    it("accepts user input", () => {

        render(

            <PasswordField />

        );

        const input =

            screen.getByDisplayValue("") as HTMLInputElement;

        fireEvent.change(

            input,

            {

                target: {

                    value: "Password123!",

                },

            },

        );

        expect(

            input.value,

        ).toBe(

            "Password123!",

        );

    });

    it("updates the strength meter", () => {

        render(

            <PasswordField

                showStrength

            />,

        );

        const input =

            screen.getByDisplayValue("") as HTMLInputElement;

        fireEvent.change(

            input,

            {

                target: {

                    value: "Password123!",

                },

            },

        );

        expect(

            screen.getByText(

                /strong/i,

            ),

        ).toBeInTheDocument();

    });

    it("renders children", () => {

        render(

            <PasswordField>

                <span>

                    Helper text

                </span>

            </PasswordField>,

        );

        expect(

            screen.getByText(

                "Helper text",

            ),

        ).toBeInTheDocument();

    });

    it("applies custom className", () => {

        const {

            container,

        } = render(

            <PasswordField

                className="custom-class"

            />,

        );

        expect(

            container.firstChild,

        ).toHaveClass(

            "custom-class",

        );

    });

});
