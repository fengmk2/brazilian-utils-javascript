import { describe, expect, it } from "../_internals/test/runtime";
import { formatLegalNature } from "./format-legal-nature";

describe("formatLegalNature", () => {
	it("should format legal nature values", () => {
		expect(formatLegalNature("")).toBe("");
		expect(formatLegalNature("2")).toBe("2");
		expect(formatLegalNature("20")).toBe("20");
		expect(formatLegalNature("206")).toBe("206");
		expect(formatLegalNature("2062")).toBe("206-2");
	});
});
