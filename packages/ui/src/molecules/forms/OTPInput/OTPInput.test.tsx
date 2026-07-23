/**
 * ============================================================================
 * Ascend Enterprise UI
 * OTPInput
 * ----------------------------------------------------------------------------
 * File: OTPInput.test.tsx
 *
 * Enterprise integration tests.
 *
 * ============================================================================
 */

import {
    describe,
    expect,
    it,
    vi,
} from "vitest";

import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";

import {
    OTPInput,
} from "./OTPInput";

describe("OTPInput", () => {

    it("renders the default number of slots", () => {

        render(
            <OTPInput />,
        );

        expect(

            screen.getAllByRole("textbox"),

        ).toHaveLength(6);

    });

    it("renders a custom number of slots", () => {

        render(

            <OTPInput
                length={4}
            />,

        );

        expect(

            screen.getAllByRole("textbox"),

        ).toHaveLength(4);

    });

    it("supports controlled values", () => {

        render(

            <OTPInput

                value={[

                    "1",

                    "2",

                    "3",

                    "4",

                    "",

                    "",

                ]}

            />,

        );

        const inputs =
            screen.getAllByRole(

                "textbox",

            );

        expect(inputs[0]).toHaveValue("1");
        expect(inputs[1]).toHaveValue("2");
        expect(inputs[2]).toHaveValue("3");
        expect(inputs[3]).toHaveValue("4");

    });

    it("supports uncontrolled values", () => {

        render(

            <OTPInput

                defaultValue={[

                    "8",

                    "9",

                    "",

                    "",

                    "",

                    "",

                ]}

            />,

        );

        const inputs =
            screen.getAllByRole(

                "textbox",

            );

        expect(inputs[0]).toHaveValue("8");
        expect(inputs[1]).toHaveValue("9");

    });

    it("calls onValueChange", () => {

        const onValueChange =
            vi.fn();

        render(

            <OTPInput

                onValueChange={

                    onValueChange

                }

            />,

        );

        fireEvent.change(

            screen.getAllByRole(

                "textbox",

            )[0],

            {

                target: {

                    value: "5",

                },

            },

        );

        expect(

            onValueChange,

        ).toHaveBeenCalled();

    });

    it("accepts numeric input", () => {

        render(

            <OTPInput />,

        );

        const input =
            screen.getAllByRole(

                "textbox",

            )[0];

        fireEvent.change(

            input,

            {

                target: {

                    value: "7",

                },

            },

        );

        expect(input).toHaveValue("7");

    });

    it("rejects alphabetic characters in numeric mode", () => {

        render(

            <OTPInput />,

        );

        const input =
            screen.getAllByRole(

                "textbox",

            )[0];

        fireEvent.change(

            input,

            {

                target: {

                    value: "A",

                },

            },

        );

        expect(input).toHaveValue("");

    });

    it("accepts alphabetic characters in alphanumeric mode", () => {

        render(

            <OTPInput

                mode="alphanumeric"

            />,

        );

        const input =
            screen.getAllByRole(

                "textbox",

            )[0];

        fireEvent.change(

            input,

            {

                target: {

                    value: "A",

                },

            },

        );

        expect(input).toHaveValue("A");

    });

    it("renders password inputs", () => {

        render(

            <OTPInput

                password

            />,

        );

        const input =
            screen.getAllByRole(

                "textbox",

            )[0];

        expect(input).toHaveAttribute(

            "type",

            "password",

        );

    });

    it("supports disabled state", () => {

        render(

            <OTPInput

                disabled

            />,

        );

        screen

            .getAllByRole(

                "textbox",

            )

            .forEach(

                input =>

                    expect(

                        input,

                    ).toBeDisabled(),

            );

    });

    it("supports readOnly state", () => {

        render(

            <OTPInput

                readOnly

            />,

        );

        screen

            .getAllByRole(

                "textbox",

            )

            .forEach(

                input =>

                    expect(

                        input,

                    ).toHaveAttribute(

                        "readonly",

                    ),

            );

    });

    it("supports paste", () => {

        render(

            <OTPInput />,

        );

        const input =
            screen.getAllByRole(

                "textbox",

            )[0];

        fireEvent.paste(

            input,

            {

                clipboardData: {

                    getData: () =>

                        "123456",

                },

            },

        );

        const inputs =
            screen.getAllByRole(

                "textbox",

            );

        expect(inputs[0]).toHaveValue("1");
        expect(inputs[1]).toHaveValue("2");
        expect(inputs[2]).toHaveValue("3");
        expect(inputs[3]).toHaveValue("4");
        expect(inputs[4]).toHaveValue("5");
        expect(inputs[5]).toHaveValue("6");

    });

    it("renders children", () => {

        render(

            <OTPInput>

                <div>

                    Custom Layout

                </div>

            </OTPInput>,

        );

        expect(

            screen.getByText(

                "Custom Layout",

            ),

        ).toBeInTheDocument();

    });

});
