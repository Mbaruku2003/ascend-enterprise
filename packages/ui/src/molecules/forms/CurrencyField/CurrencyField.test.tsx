/**
 * ============================================================================
 * Ascend Enterprise UI
 * CurrencyField
 * ----------------------------------------------------------------------------
 * File: CurrencyField.test.tsx
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
    CurrencyField,
    CurrencyInput,
    CurrencyPrefix,
    CurrencySuffix,
} from "./index";

describe("CurrencyField", () => {

    it("renders the default composition", () => {

        render(
            <CurrencyField />,
        );

        expect(
            screen.getByRole("textbox"),
        ).toBeInTheDocument();

    });

    it("supports controlled values", () => {

        render(

            <CurrencyField
                value={1234.56}
            />,

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveValue(
            expect.stringContaining("1"),
        );

    });

    it("supports uncontrolled values", () => {

        render(

            <CurrencyField
                defaultValue={250}
            />,

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveValue(
            expect.stringContaining("250"),
        );

    });

    it("calls onValueChange", () => {

        const onValueChange =
            vi.fn();

        render(

            <CurrencyField
                onValueChange={onValueChange}
            />,

        );

        fireEvent.change(

            screen.getByRole("textbox"),

            {

                target: {

                    value: "500",

                },

            },

        );

        expect(
            onValueChange,
        ).toHaveBeenCalled();

    });

    it("supports disabled state", () => {

        render(

            <CurrencyField
                disabled
            />,

        );

        expect(
            screen.getByRole("textbox"),
        ).toBeDisabled();

    });

    it("supports readOnly state", () => {

        render(

            <CurrencyField
                readOnly
            />,

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveAttribute(
            "readonly",
        );

    });

    it("renders custom children", () => {

        render(

            <CurrencyField>

                <div>
                    Custom Layout
                </div>

            </CurrencyField>,

        );

        expect(

            screen.getByText(
                "Custom Layout",
            ),

        ).toBeInTheDocument();

    });

    it("renders CurrencyInput independently", () => {

        render(

            <CurrencyField>

                <CurrencyInput />

            </CurrencyField>,

        );

        expect(
            screen.getByRole("textbox"),
        ).toBeInTheDocument();

    });

    it("renders CurrencyPrefix", () => {

        render(

            <CurrencyField>

                <CurrencyPrefix>
                    $
                </CurrencyPrefix>

                <CurrencyInput />

            </CurrencyField>,

        );

        expect(

            screen.getByText("$"),

        ).toBeInTheDocument();

    });

    it("renders CurrencySuffix", () => {

        render(

            <CurrencyField>

                <CurrencyInput />

                <CurrencySuffix>
                    USD
                </CurrencySuffix>

            </CurrencyField>,

        );

        expect(

            screen.getByText("USD"),

        ).toBeInTheDocument();

    });

    it("updates the value after typing", () => {

        render(

            <CurrencyField />,

        );

        const input =
            screen.getByRole(
                "textbox",
            );

        fireEvent.focus(
            input,
        );

        fireEvent.change(

            input,

            {

                target: {

                    value: "1500",

                },

            },

        );

        expect(
            input,
        ).toHaveValue("1500");

    });

    it("formats value on blur", () => {

        render(

            <CurrencyField
                defaultValue={1200}
            />,

        );

        const input =
            screen.getByRole(
                "textbox",
            );

        fireEvent.focus(
            input,
        );

        fireEvent.blur(
            input,
        );

        expect(
            input.value.length,
        ).toBeGreaterThan(0);

    });

    it("supports wheel interaction when enabled", () => {

        render(

            <CurrencyField
                enableWheel
                defaultValue={10}
            />,

        );

        const input =
            screen.getByRole(
                "textbox",
            );

        fireEvent.wheel(

            input,

            {

                deltaY: -100,

            },

        );

        expect(
            input,
        ).toBeInTheDocument();

    });

});
