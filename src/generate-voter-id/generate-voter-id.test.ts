import { describe, expect, it } from "../_internals/test/runtime";
import { isValidVoterId } from "../is-valid-voter-id/is-valid-voter-id";
import { generateVoterId } from "./generate-voter-id";

describe("generateVoterId", () => {
	it("should generate valid voter ids", () => {
		for (let i = 0; i < 50; i++) {
			expect(isValidVoterId(generateVoterId())).toBe(true);
		}
	});

	it("should generate voter id for a specific state", () => {
		expect(generateVoterId("SP").slice(8, 10)).toBe("01");
	});
});
