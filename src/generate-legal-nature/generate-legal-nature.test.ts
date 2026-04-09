import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLegalNature } from "../is-valid-legal-nature/is-valid-legal-nature";
import { generateLegalNature } from "./generate-legal-nature";

describe("generateLegalNature", () => {
	it("should generate valid legal nature values", () => {
		for (let i = 0; i < 50; i++) {
			expect(isValidLegalNature(generateLegalNature())).toBe(true);
		}
	});
});
