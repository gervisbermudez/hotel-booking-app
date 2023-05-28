import { describe, expect, test } from "vitest";

import { getParseStringDate } from "../src/utils/index";

describe("getParseStringDate", () => {
  test("should return a valid Date object when a valid date string is provided", () => {
    const dateString = "2023-05-15";
    const parsedDate = getParseStringDate(dateString);

    expect(parsedDate).toBeInstanceOf(Date);
    expect(parsedDate?.getFullYear()).toBe(2023);
    expect(parsedDate?.getMonth()).toBe(4); // Los meses en JavaScript van de 0 a 11
    expect(parsedDate?.getDate()).toBe(15);
  });

  test("should return an invalid Date object when an invalid date string is provided", () => {
    const dateString = "2023-99-99"; // Fecha inválida
    const parsedDate = getParseStringDate(dateString);
    expect(parsedDate).toBe(undefined);
  });
});
