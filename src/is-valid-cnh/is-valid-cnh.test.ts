import { describe, expect, it } from "../_internals/test/runtime";
import { isValidCnh } from "./is-valid-cnh";

describe("isValidCnh", () => {
	it("should return true for valid CNH", () => {
		expect(isValidCnh("00000000119")).toBe(true);
		expect(isValidCnh("000000001-19")).toBe(true);
	});

	it("should return false for invalid CNH", () => {
		expect(isValidCnh("12345678901")).toBe(false);
		expect(isValidCnh("11111111111")).toBe(false);
	});
});
