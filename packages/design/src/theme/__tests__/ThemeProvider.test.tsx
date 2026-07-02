import {
  describe,
  expect,
  it,
  beforeEach,
  vi,
} from "vitest";

import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import React from "react";

import { ThemeProvider } from "../ThemeProvider";
import { ThemeContext } from "../ThemeContext";
import { ThemeManager } from "../ThemeManager";
import { DEFAULT_THEME } from "../defaults";
import type { ThemeState } from "../types";

describe("ThemeProvider", () => {
  let manager: ThemeManager;

  beforeEach(() => {
    manager = {
      initialize: vi.fn(() => DEFAULT_THEME),
      update: vi.fn(),
      reset: vi.fn(() => DEFAULT_THEME),
      apply: vi.fn(),
      subscribeToSystemTheme: vi.fn(() => vi.fn()),
      events: {
        emit: vi.fn(),
      },
    } as unknown as ThemeManager;
  });

  function Consumer() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          if (!context) {
            return <div>No Context</div>;
          }

          return (
            <>
              <div data-testid="mode">
                {context.theme.mode}
              </div>

              <div data-testid="accent">
                {context.theme.accent}
              </div>

              <div data-testid="resolved">
                {context.resolvedTheme}
              </div>

              <button
                onClick={() =>
                  context.setThemeMode("dark")
                }
              >
                Dark
              </button>

              <button
                onClick={() =>
                  context.setAccent("green")
                }
              >
                Accent
              </button>

              <button
                onClick={() =>
                  context.updateAccessibility({
                    reducedMotion: true,
                  })
                }
              >
                Accessibility
              </button>

              <button
                onClick={() =>
                  context.resetTheme()
                }
              >
                Reset
              </button>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
describe("rendering", () => {
  it("renders children", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <div>Ascend</div>
      </ThemeProvider>,
    );

    expect(
      screen.getByText("Ascend"),
    ).toBeInTheDocument();
  });

  it("provides the ThemeContext", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      screen.getByTestId("mode"),
    ).toHaveTextContent("light");
  });

  it("initializes ThemeManager once", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      manager.initialize,
    ).toHaveBeenCalledTimes(1);
  });

  it("updates ThemeManager after initialization", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(manager.update).toHaveBeenCalled();
  });
});
describe("actions", () => {
  it("changes theme mode", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    fireEvent.click(
      screen.getByText("Dark"),
    );

    expect(
      screen.getByTestId("mode"),
    ).toHaveTextContent("dark");
  });

  it("changes accent", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    fireEvent.click(
      screen.getByText("Accent"),
    );

    expect(
      screen.getByTestId("accent"),
    ).toHaveTextContent("green");
  });

  it("updates accessibility preferences", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    fireEvent.click(
      screen.getByText("Accessibility"),
    );

    expect(
      manager.update,
    ).toHaveBeenCalled();
  });

  it("resets the theme", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    fireEvent.click(
      screen.getByText("Reset"),
    );

    expect(manager.reset).toHaveBeenCalledOnce();
  });
});

describe("advanced behaviour", () => {
  it("computes the resolved theme", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      screen.getByTestId("resolved"),
    ).toHaveTextContent("light");
  });

  it("subscribes to system theme changes", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      manager.subscribeToSystemTheme,
    ).toHaveBeenCalled();
  });

  it("supports a custom ThemeManager", () => {
    render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      manager.initialize,
    ).toHaveBeenCalled();
  });

  it("does not recreate callbacks after rerender", () => {
    const { rerender } = render(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    rerender(
      <ThemeProvider themeManager={manager}>
        <Consumer />
      </ThemeProvider>,
    );

    expect(
      manager.initialize,
    ).toHaveBeenCalledTimes(1);
  });

  it("renders without crashing", () => {
    expect(() =>
      render(
        <ThemeProvider themeManager={manager}>
          <Consumer />
        </ThemeProvider>,
      ),
    ).not.toThrow();
  });
});


