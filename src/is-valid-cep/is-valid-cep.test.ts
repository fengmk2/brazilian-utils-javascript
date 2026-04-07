import { describe, expect, test } from "../_internals/test/runtime";
import { LENGTH } from "./constants";
import { isValidCep } from "./is-valid-cep";

describe("isValidCep", () => {
	describe("should return false", () => {
		test("when it is an empty string", () => {
			expect(isValidCep("")).toBe(false);
		});

		test("when it is null", () => {
			// @ts-expect-error
			expect(isValidCep(null)).toBe(false);
		});

		test("when it is undefined", () => {
			// @ts-expect-error
			expect(isValidCep(undefined)).toBe(false);
		});

		test(`when length is less than ${LENGTH}`, () => {
			expect(isValidCep("12345")).toBe(false);
		});

		test(`when length is greater than ${LENGTH}`, () => {
			expect(isValidCep("123456789")).toBe(false);
		});
	});

	describe("should return true", () => {
		test("when is a CEP valid without mask", () => {
			expect(isValidCep("01310100")).toBe(true);
		});

		test("when is a CEP valid with mask", () => {
			expect(isValidCep("01310-100")).toBe(true);
		});
	});
});
