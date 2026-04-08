import { describe, expect, it } from "../_internals/test/runtime";
import { parseLegalNature } from "./parse-legal-nature";

describe("parseLegalNature", () => {
	it("should remove legal nature formatting", () => {
		expect(parseLegalNature("206-2")).toBe("2062");
	});
});
