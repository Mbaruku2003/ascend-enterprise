import { render } from "@testing-library/react";

import { Dialog } from "./Dialog";

describe("Dialog", () => {
    it("renders children", () => {
        const { getByText } = render(
            <Dialog defaultOpen>
                <div>Hello</div>
            </Dialog>,
        );

        expect(
            getByText("Hello"),
        ).toBeInTheDocument();
    });
});
