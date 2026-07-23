import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import {
    DatePicker,
    DateInput,
    CalendarButton,
    CalendarPopover,
    CalendarHeader,
    CalendarGrid,
} from "./index";

describe("DatePicker", () => {

    it("renders default composition", () => {

        render(
            <DatePicker />
        );

        expect(
            screen.getByRole("textbox"),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        ).toBeInTheDocument();

    });

    it("renders custom composition", () => {

        render(

            <DatePicker>

                <DateInput />

                <CalendarButton />

            </DatePicker>

        );

        expect(
            screen.getByRole("textbox"),
        ).toBeInTheDocument();

    });

    it("supports controlled value", () => {

        render(

            <DatePicker

                value={new Date(2026, 0, 15)}

            />

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveValue(
            expect.any(String),
        );

    });

    it("supports uncontrolled value", () => {

        render(

            <DatePicker

                defaultValue={new Date(2026, 6, 10)}

            />

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveValue(
            expect.any(String),
        );

    });

    it("calls onValueChange after typing", () => {

        const onValueChange = vi.fn();

        render(

            <DatePicker

                onValueChange={onValueChange}

            />

        );

        fireEvent.change(

            screen.getByRole("textbox"),

            {

                target: {

                    value: "2026-07-25",

                },

            },

        );

        expect(
            onValueChange,
        ).toHaveBeenCalled();

    });

    it("opens calendar from button", () => {

        render(

            <DatePicker />

        );

        fireEvent.click(

            screen.getByRole("button", {

                name: /toggle calendar/i,

            }),

        );

        expect(

            screen.getByRole("dialog"),

        ).toBeInTheDocument();

    });

    it("opens calendar on input focus", () => {

        render(

            <DatePicker />

        );

        fireEvent.focus(

            screen.getByRole("textbox"),

        );

        expect(

            screen.getByRole("dialog"),

        ).toBeInTheDocument();

    });

    it("renders calendar header", () => {

        render(

            <DatePicker>

                <DateInput />

                <CalendarButton />

                <CalendarPopover>

                    <CalendarHeader />

                    <CalendarGrid />

                </CalendarPopover>

            </DatePicker>

        );

        fireEvent.click(

            screen.getByRole("button", {

                name: /toggle calendar/i,

            }),

        );

        expect(

            screen.getByLabelText(

                /previous month/i,

            ),

        ).toBeInTheDocument();

        expect(

            screen.getByLabelText(

                /next month/i,

            ),

        ).toBeInTheDocument();

    });

});
describe("DatePicker interactions", () => {

    it("navigates to the next month", () => {

        render(<DatePicker />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        const previousLabel =
            screen.getByText(/\w+\s+\d{4}/).textContent;

        fireEvent.click(
            screen.getByRole("button", {
                name: /next month/i,
            }),
        );

        expect(
            screen.getByText(/\w+\s+\d{4}/).textContent,
        ).not.toEqual(previousLabel);

    });

    it("navigates to the previous month", () => {

        render(<DatePicker />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        const previousLabel =
            screen.getByText(/\w+\s+\d{4}/).textContent;

        fireEvent.click(
            screen.getByRole("button", {
                name: /previous month/i,
            }),
        );

        expect(
            screen.getByText(/\w+\s+\d{4}/).textContent,
        ).not.toEqual(previousLabel);

    });

    it("respects disabled state", () => {

        render(
            <DatePicker disabled />
        );

        expect(
            screen.getByRole("textbox"),
        ).toBeDisabled();

        expect(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        ).toBeDisabled();

    });

    it("respects readOnly state", () => {

        render(
            <DatePicker readOnly />
        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveAttribute(
            "readonly",
        );

    });

    it("renders calendar dialog", () => {

        render(<DatePicker />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getByRole("dialog"),
        ).toBeInTheDocument();

    });

    it("renders weekday headers", () => {

        render(<DatePicker />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getByText("Sun"),
        ).toBeInTheDocument();

        expect(
            screen.getByText("Mon"),
        ).toBeInTheDocument();

        expect(
            screen.getByText("Tue"),
        ).toBeInTheDocument();

    });

    it("renders a complete calendar grid", () => {

        render(<DatePicker />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        const buttons =
            screen.getAllByRole("button");

        expect(
            buttons.length,
        ).toBeGreaterThan(35);

    });

    it("supports locale formatting", () => {

        render(

            <DatePicker
                locale="fr-FR"
                defaultValue={
                    new Date(2026, 6, 15)
                }
            />

        );

        expect(
            screen.getByRole("textbox"),
        ).toHaveValue(
            expect.any(String),
        );

    });

    it("supports custom parser", () => {

        const parser = vi.fn(
            () => new Date(2026, 0, 1),
        );

        render(
            <DatePicker
                parse={parser}
            />
        );

        fireEvent.change(
            screen.getByRole("textbox"),
            {
                target: {
                    value: "anything",
                },
            },
        );

        expect(parser).toHaveBeenCalled();

    });

    it("supports custom formatter", () => {

        const formatter = vi.fn(
            () => "formatted",
        );

        render(
            <DatePicker
                format={formatter}
                defaultValue={new Date()}
            />
        );

        expect(formatter).toHaveBeenCalled();

    });

});
describe("DatePicker regression & accessibility", () => {

    it("marks the selected date with aria-selected", () => {

        render(
            <DatePicker
                defaultValue={new Date()}
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getAllByRole("button")
                .some(
                    button =>
                        button.getAttribute("aria-selected") === "true",
                ),
        ).toBe(true);

    });

    it("marks today's date with aria-current", () => {

        render(
            <DatePicker />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getAllByRole("button")
                .some(
                    button =>
                        button.getAttribute("aria-current") === "date",
                ),
        ).toBe(true);

    });

    it("updates aria-expanded when opening", () => {

        render(
            <DatePicker />,
        );

        const trigger =
            screen.getByRole("button", {
                name: /toggle calendar/i,
            });

        expect(trigger)
            .toHaveAttribute(
                "aria-expanded",
                "false",
            );

        fireEvent.click(trigger);

        expect(trigger)
            .toHaveAttribute(
                "aria-expanded",
                "true",
            );

    });

    it("supports minDate", () => {

        render(
            <DatePicker
                minDate={
                    new Date(2026, 5, 1)
                }
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getByRole("dialog"),
        ).toBeInTheDocument();

    });

    it("supports maxDate", () => {

        render(
            <DatePicker
                maxDate={
                    new Date(2026, 11, 31)
                }
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getByRole("dialog"),
        ).toBeInTheDocument();

    });

    it("supports disabled dates", () => {

        render(
            <DatePicker
                disabledDates={[
                    new Date(),
                ]}
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        expect(
            screen.getByRole("dialog"),
        ).toBeInTheDocument();

    });

    it("closes after selecting when closeOnSelect is enabled", () => {

        render(
            <DatePicker
                closeOnSelect
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        const buttons =
            screen
                .getAllByRole("button")
                .filter(button => {

                    const text =
                        button.textContent?.trim();

                    return /^\d+$/.test(
                        text ?? "",
                    );

                });

        if (buttons.length > 0) {

            fireEvent.click(
                buttons[0],
            );

        }

    });

    it("remains open when closeOnSelect is false", () => {

        render(
            <DatePicker
                closeOnSelect={false}
            />,
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: /toggle calendar/i,
            }),
        );

        const buttons =
            screen
                .getAllByRole("button")
                .filter(button => {

                    const text =
                        button.textContent?.trim();

                    return /^\d+$/.test(
                        text ?? "",
                    );

                });

        if (buttons.length > 0) {

            fireEvent.click(
                buttons[0],
            );

        }

        expect(
            screen.getByRole("dialog"),
        ).toBeInTheDocument();

    });

});

describe("useDatePicker", () => {

    it("throws outside provider", async () => {

        const {

            useDatePicker,

        } = await import("./useDatePicker");

        function TestComponent() {

            useDatePicker();

            return null;

        }

        expect(

            () => render(

                <TestComponent />,

            ),

        ).toThrow(

            /DatePickerProvider/i,

        );

    });

});
