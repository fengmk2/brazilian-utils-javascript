import { describe, expect, it } from "../_internals/test/runtime";
import { generateCep } from "./generate-cep";

describe("generateCep", () => {
	it("should generate a valid CEP", () => {
		expect(generateCep()).toMatch(/^\d{8}$/);
	});
});
