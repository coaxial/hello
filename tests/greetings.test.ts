// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

async function loadGreetings() {
  vi.resetModules();
  return import("../assets/js/greetings");
}

function setHour(hour: number) {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 0, 1, hour, 0, 0));
}

function greetingPhrase(): string {
  return document.querySelector("#greeting__phrase")?.innerHTML ?? "";
}

function greetingLanguage(): string {
  return document.querySelector("#greeting__language")?.innerHTML ?? "";
}

describe("greetings", () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<span id="greeting__phrase"></span><span id="greeting__language"></span>';
    // Deterministically pick the first greeting of the period.
    vi.spyOn(Math, "random").mockReturnValue(0);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it.each([
    [9, "صباح الخير", "morning"],
    [14, "طاب مسائك", "afternoon"],
    [21, "مساء الخير", "evening"],
    [2, "مساء الخير", "evening"],
  ])("shows the correct greeting at %i:00", async (hour, phrase, period) => {
    setHour(hour);

    await loadGreetings();

    expect(greetingPhrase()).toBe(phrase);
    expect(greetingLanguage()).toBe(`(That's “good ${period}” in Arabic)`);
  });

  it("picks a greeting from the current period's list", async () => {
    setHour(9);
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    await loadGreetings();

    expect(greetingPhrase()).not.toBe("");
    expect(greetingLanguage()).toContain("good morning");
  });
});
