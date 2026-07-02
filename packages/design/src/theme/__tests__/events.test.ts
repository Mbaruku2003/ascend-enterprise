import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  ThemeEventBus,
  type ThemeEvents,
} from "../events";

import { DEFAULT_THEME } from "../defaults";

describe("ThemeEventBus", () => {
  let bus: ThemeEventBus;

  beforeEach(() => {
    bus = new ThemeEventBus();
  });

  describe("on()", () => {
    it("registers a listener", () => {
      const listener = vi.fn();

      bus.on("theme:changed", listener);

      expect(bus.listenerCount()).toBe(1);
    });

    it("returns an unsubscribe function", () => {
      const listener = vi.fn();

      const unsubscribe = bus.on(
        "theme:changed",
        listener,
      );

      unsubscribe();

      expect(bus.listenerCount()).toBe(0);
    });

    it("allows multiple listeners", () => {
      bus.on("theme:changed", vi.fn());
      bus.on("theme:changed", vi.fn());
      bus.on("theme:changed", vi.fn());

      expect(bus.listenerCount()).toBe(3);
    });
  });

  describe("emit()", () => {
    it("calls registered listeners", () => {
      const listener = vi.fn();

      bus.on("theme:changed", listener);

      const payload: ThemeEvents["theme:changed"] = {
        previous: DEFAULT_THEME,
        current: {
          ...DEFAULT_THEME,
          mode: "dark",
        },
      };

      bus.emit("theme:changed", payload);

      expect(listener).toHaveBeenCalledOnce();

      expect(listener).toHaveBeenCalledWith(payload);
    });

    it("does nothing when there are no listeners", () => {
      expect(() =>
        bus.emit("theme:reset", {
          theme: DEFAULT_THEME,
        }),
      ).not.toThrow();
    });

    it("calls every registered listener", () => {
      const a = vi.fn();
      const b = vi.fn();
      const c = vi.fn();

      bus.on("theme:reset", a);
      bus.on("theme:reset", b);
      bus.on("theme:reset", c);

      bus.emit("theme:reset", {
        theme: DEFAULT_THEME,
      });

      expect(a).toHaveBeenCalledOnce();
      expect(b).toHaveBeenCalledOnce();
      expect(c).toHaveBeenCalledOnce();
    });

    it("isolates listener failures", () => {
      const bad = vi.fn(() => {
        throw new Error("boom");
      });

      const good = vi.fn();

      const warn = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      bus.on("theme:reset", bad);
      bus.on("theme:reset", good);

      bus.emit("theme:reset", {
        theme: DEFAULT_THEME,
      });

      expect(good).toHaveBeenCalledOnce();

      expect(warn).toHaveBeenCalledOnce();
    });
  });
});

describe("off()", () => {
  it("removes a registered listener", () => {
    const listener = vi.fn();

    bus.on("theme:changed", listener);

    expect(bus.listenerCount("theme:changed")).toBe(1);

    bus.off("theme:changed", listener);

    expect(bus.listenerCount("theme:changed")).toBe(0);
  });

  it("does nothing when removing an unknown listener", () => {
    const listener = vi.fn();

    expect(() =>
      bus.off("theme:changed", listener),
    ).not.toThrow();

    expect(bus.listenerCount()).toBe(0);
  });

  it("removes only the specified listener", () => {
    const first = vi.fn();
    const second = vi.fn();

    bus.on("theme:changed", first);
    bus.on("theme:changed", second);

    bus.off("theme:changed", first);

    bus.emit("theme:changed", {
      previous: DEFAULT_THEME,
      current: DEFAULT_THEME,
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledOnce();
  });
});

describe("clear()", () => {
  it("removes every listener", () => {
    bus.on("theme:changed", vi.fn());
    bus.on("theme:reset", vi.fn());
    bus.on("theme:system-changed", vi.fn());

    expect(bus.listenerCount()).toBe(3);

    bus.clear();

    expect(bus.listenerCount()).toBe(0);
  });

  it("can be called more than once", () => {
    bus.clear();
    bus.clear();
    bus.clear();

    expect(bus.listenerCount()).toBe(0);
  });
});

describe("listenerCount()", () => {
  it("returns the total listener count", () => {
    bus.on("theme:changed", vi.fn());
    bus.on("theme:changed", vi.fn());
    bus.on("theme:reset", vi.fn());

    expect(bus.listenerCount()).toBe(3);
  });

  it("returns the count for a single event", () => {
    bus.on("theme:changed", vi.fn());
    bus.on("theme:changed", vi.fn());
    bus.on("theme:reset", vi.fn());

    expect(
      bus.listenerCount("theme:changed"),
    ).toBe(2);

    expect(
      bus.listenerCount("theme:reset"),
    ).toBe(1);

    expect(
      bus.listenerCount("theme:system-changed"),
    ).toBe(0);
  });
});

describe("event isolation", () => {
  it("only emits listeners registered for that event", () => {
    const changed = vi.fn();
    const reset = vi.fn();

    bus.on("theme:changed", changed);
    bus.on("theme:reset", reset);

    bus.emit("theme:changed", {
      previous: DEFAULT_THEME,
      current: DEFAULT_THEME,
    });

    expect(changed).toHaveBeenCalledOnce();
    expect(reset).not.toHaveBeenCalled();
  });

  it("keeps listeners independent across event types", () => {
    const changed = vi.fn();
    const reset = vi.fn();
    const system = vi.fn();

    bus.on("theme:changed", changed);
    bus.on("theme:reset", reset);
    bus.on("theme:system-changed", system);

    bus.emit("theme:system-changed", {
      resolvedTheme: "dark",
    });

    expect(system).toHaveBeenCalledOnce();

    expect(changed).not.toHaveBeenCalled();
    expect(reset).not.toHaveBeenCalled();
  });
});

describe("edge cases", () => {
  it("supports self-unsubscribing listeners", () => {
    const listener = vi.fn();

    const unsubscribe = bus.on(
      "theme:changed",
      () => {
        listener();
        unsubscribe();
      },
    );

    const payload = {
      previous: DEFAULT_THEME,
      current: DEFAULT_THEME,
    };

    bus.emit("theme:changed", payload);
    bus.emit("theme:changed", payload);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("does not register duplicate listeners twice", () => {
    const listener = vi.fn();

    bus.on("theme:changed", listener);
    bus.on("theme:changed", listener);

    bus.emit("theme:changed", {
      previous: DEFAULT_THEME,
      current: DEFAULT_THEME,
    });

    expect(listener).toHaveBeenCalledTimes(1);

    expect(
      bus.listenerCount("theme:changed"),
    ).toBe(1);
  });

  it("supports removing listeners via the unsubscribe callback", () => {
    const listener = vi.fn();

    const unsubscribe = bus.on(
      "theme:reset",
      listener,
    );

    unsubscribe();

    bus.emit("theme:reset", {
      theme: DEFAULT_THEME,
    });

    expect(listener).not.toHaveBeenCalled();
  });
});
