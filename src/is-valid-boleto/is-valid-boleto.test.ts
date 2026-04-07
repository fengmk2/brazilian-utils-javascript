import { describe, expect, test } from "../_internals/test/runtime";
import { LENGTH } from "./constants";
import { isValidBoleto } from "./is-valid-boleto";

describe("isValidBoleto", () => {
	describe("should return false", () => {
		test("when it is an empty string", () => {
			expect(isValidBoleto("")).toBe(false);
		});

		test("when it is null", () => {
			// @ts-expect-error
			expect(isValidBoleto(null)).toBe(false);
		});

		test("when it is undefined", () => {
			// @ts-expect-error
			expect(isValidBoleto(undefined)).toBe(false);
		});

		test(`when length is less than ${LENGTH}`, () => {
			expect(isValidBoleto("123456789")).toBe(false);
		});

		test("when is array", () => {
			// @ts-expect-error
			expect(isValidBoleto([])).toBe(false);
		});

		test("when is object", () => {
			// @ts-expect-error
			expect(isValidBoleto({})).toBe(false);
		});

		test("when is boolean", () => {
			// @ts-expect-error
			expect(isValidBoleto(true)).toBe(false);
			// @ts-expect-error
			expect(isValidBoleto(false)).toBe(false);
		});

		test("when check digit mod10 is invalid", () => {
			expect(isValidBoleto("00190000020114971860168524522114675860000102656")).toBe(false);
		});

		test("check digit mod11 is invalid", () => {
			expect(isValidBoleto("00190000090114971860168524522114975860000102656")).toBe(false);
		});
	});

	describe("should return true", () => {
		test("when is a boleto valid without mask", () => {
			expect(isValidBoleto("00190000090114971860168524522114675860000102656")).toBe(true);
		});

		test("when is a boleto valid with mask", () => {
			expect(isValidBoleto("0019000009 01149.718601 68524.522114 6 75860000102656")).toBe(true);
		});
	});
});
