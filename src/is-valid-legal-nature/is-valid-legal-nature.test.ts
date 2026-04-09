import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLegalNature } from "./is-valid-legal-nature";

describe("isValidLegalNature", () => {
	it("should validate legal nature codes", () => {
		expect(isValidLegalNature("2062")).toBe(true);
		expect(isValidLegalNature("206-2")).toBe(true);
		expect(isValidLegalNature("9999")).toBe(false);
	});
});
