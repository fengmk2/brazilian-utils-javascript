import { describe, expect, it } from "../_internals/test/runtime";
import { isValidCnh } from "../is-valid-cnh/is-valid-cnh";
import { generateCnh } from "./generate-cnh";

describe("generateCnh", () => {
	it("should generate valid CNH values", () => {
		for (let i = 0; i < 50; i++) {
			expect(isValidCnh(generateCnh())).toBe(true);
		}
	});
});
