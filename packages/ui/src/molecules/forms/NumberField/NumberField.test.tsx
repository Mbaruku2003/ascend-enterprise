/**
 * ============================================================================
 * Ascend Enterprise UI
 * NumberField
 * ----------------------------------------------------------------------------
 * File: NumberField.test.tsx
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
    NumberField,
} from "./NumberField";

describe("NumberField", () => {

    it("renders successfully", () => {

        render(
            <NumberField />,
        );

        expect(
            screen.getByRole(
                "spinbutton",
            ),
        ).toBeInTheDocument();

    });

    it("supports uncontrolled values", () => {

        render(
            <NumberField
                defaultValue={10}
            />,
        );

        expect(
            screen.getByRole(
                "spinbutton",
            ),
        ).toHaveValue(
            "10",
        );

    });

    it("supports controlled values", () => {

        render(
            <NumberField
                value={25}
            />,
        );

        expect(
            screen.getByRole(
                "spinbutton",
            ),
        ).toHaveValue(
            "25",
        );

    });

    it("calls onValueChange", () => {

        const onValueChange =
            vi.fn();

        render(

            <NumberField
                defaultValue={1}
                onValueChange={onValueChange}
            />,

        );

        fireEvent.click(

            screen.getByRole(

                "button",

                {

                    name:
/increase value/i,

                },

            ),

        );

        expect(
            onValueChange,
        ).toHaveBeenCalled();

    });

    it("increments", () => {

        render(
            <NumberField
                defaultValue={1}
            />,
        );

        fireEvent.click(

            screen.getByRole(

                "button",

                {

                    name:
/increase value/i,

                },

            ),

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "2",
        );

    });

    it("decrements", () => {

        render(
            <NumberField
                defaultValue={5}
            />,
        );

        fireEvent.click(

            screen.getByRole(

                "button",

                {

                    name:
/decrease value/i,

                },

            ),

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "4",
        );

    });

    it("clamps to max", () => {

        render(

            <NumberField

                defaultValue={10}

                max={10}

            />,

        );

        fireEvent.click(

            screen.getByRole(

                "button",

                {

                    name:
/increase value/i,

                },

            ),

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "10",
        );

    });

    it("clamps to min", () => {

        render(

            <NumberField

                defaultValue={0}

                min={0}

            />,

        );

        fireEvent.click(

            screen.getByRole(

                "button",

                {

                    name:
/decrease value/i,

                },

            ),

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "0",
        );

    });

    it("supports custom parser", () => {

        render(

            <NumberField

                parse={(value) =>

                    Number(

                        value.replace(

                            "$",

                            "",

                        ),

                    )

                }

            />,

        );

        fireEvent.change(

            screen.getByRole(
                "spinbutton",
            ),

            {

                target: {

                    value: "$25",

                },

            },

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "25",
        );

    });

    it("supports custom formatter", () => {

        render(

            <NumberField

                value={1000}

                format={(value) =>

                    `$${value}`

                }

            />,

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "$1000",
        );

    });

    it("supports precision", () => {

        render(

            <NumberField

                defaultValue={

                    1.9999

                }

                precision={2}

            />,

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "2",
        );

    });

    it("increments with ArrowUp", () => {

        render(

            <NumberField

                defaultValue={5}

            />,

        );

        fireEvent.keyDown(

            screen.getByRole(
                "spinbutton",
            ),

            {

                key:"ArrowUp",

            },

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "6",
        );

    });

    it("decrements with ArrowDown", () => {

        render(

            <NumberField

                defaultValue={5}

            />,

        );

        fireEvent.keyDown(

            screen.getByRole(
                "spinbutton",
            ),

            {

                key:"ArrowDown",

            },

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveValue(
            "4",
        );

    });

    it("respects disabled", () => {

        render(

            <NumberField

                defaultValue={5}

                disabled

            />,

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toBeDisabled();

    });

    it("respects readOnly", () => {

        render(

            <NumberField

                defaultValue={5}

                readOnly

            />,

        );

        expect(

            screen.getByRole(
                "spinbutton",
            ),

        ).toHaveAttribute(

            "readonly",

        );

    });

    it("renders children", () => {

        render(

            <NumberField>

                <span>

                    Helper

                </span>

            </NumberField>,

        );

        expect(

            screen.getByText(

                "Helper",

            ),

        ).toBeInTheDocument();

    });

});
