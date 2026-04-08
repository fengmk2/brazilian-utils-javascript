import { describe, expect, it } from "../_internals/test/runtime";
import { formatLegalNature } from "./format-legal-nature";

describe("formatLegalNature", () => {
	it("should format legal nature values", () => {
		expect(formatLegalNature("2062")).toBe("206-2");
	});
});
