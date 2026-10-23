import { describe, it, expect, vi, beforeEach } from "vitest";

const { captureException } = vi.hoisted(() => ({ captureException: vi.fn() }));

vi.mock("../functions/_shared/sentry", () => ({
  default: { captureException },
}));

vi.mock("node-fetch", () => ({
  default: vi.fn(),
}));

import nodeFetch from "node-fetch";
import { handler, tempToWords } from "../functions/weather";

const mockedFetch = vi.mocked(nodeFetch);

describe("tempToWords", () => {
  it.each([
    [-10, "rather cold"],
    [0, "rather cold"],
    [4, "rather cold"],
    [5, "cool"],
    [19, "cool"],
    [20, "nice"],
    [26, "nice"],
    [27, "rather hot"],
    [40, "rather hot"],
  ])("maps %i°C to %s", (celsius, expected) => {
    expect(tempToWords(celsius)).toBe(expected);
  });

  it("falls back to 'unknown' for NaN", () => {
    expect(tempToWords(NaN)).toBe("unknown");
  });
});

describe("handler", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.WEATHER_LOCATION = "London";
  });

  it("returns 200 with formatted weather on success", async () => {
    mockedFetch.mockResolvedValueOnce({
      json: async () => ["PARTLY CLOUDY", "⛅", "9"],
    } as Awaited<ReturnType<typeof nodeFetch>>);

    const result = await handler({}, {});

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({
      temp: { celsius: 9, fahrenheit: 48, words: "cool" },
      weather: { words: "partly cloudy", icon: "⛅" },
    });
    expect(mockedFetch).toHaveBeenCalledOnce();
    expect(captureException).not.toHaveBeenCalled();
  });

  it("returns 500 and reports to Sentry when the request fails", async () => {
    const error = new Error("network down");
    mockedFetch.mockRejectedValueOnce(error);

    const result = await handler({}, {});

    expect(result.statusCode).toBe(500);
    expect(JSON.parse(result.body)).toEqual({ error: {} });
    expect(captureException).toHaveBeenCalledWith(error);
  });
});
