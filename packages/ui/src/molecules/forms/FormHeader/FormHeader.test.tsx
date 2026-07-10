import {
  render,
  screen,
} from "@testing-library/react";

import { FormHeader } from "./FormHeader";

describe(
  "FormHeader",
  () => {
    it(
      "renders title",
      () => {
        render(
          <FormHeader
            title="Profile"
          />,
        );

        expect(
          screen.getByText(
            "Profile",
          ),
        ).toBeInTheDocument();
      },
    );

    it(
      "renders subtitle",
      () => {
        render(
          <FormHeader
            title="Profile"
            subtitle="Account"
          />,
        );

        expect(
          screen.getByText(
            "Account",
          ),
        ).toBeInTheDocument();
      },
    );

    it(
      "renders description",
      () => {
        render(
          <FormHeader
            title="Profile"
            description="Manage your profile."
          />,
        );

        expect(
          screen.getByText(
            "Manage your profile.",
          ),
        ).toBeInTheDocument();
      },
    );

    it(
      "renders actions",
      () => {
        render(
          <FormHeader
            title="Profile"
            actions={
              <button>
                Edit
              </button>
            }
          />,
        );

        expect(
          screen.getByRole(
            "button",
          ),
        ).toHaveTextContent(
          "Edit",
        );
      },
    );

    it(
      "supports centered layout",
      () => {
        render(
          <FormHeader
            title="Centered"
            align="center"
          />,
        );

        expect(
          screen.getByText(
            "Centered",
          ),
        ).toBeInTheDocument();
      },
    );
  },
);
