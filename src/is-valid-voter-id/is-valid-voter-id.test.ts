import { describe, expect, it } from "../_internals/test/runtime";
import { generateVoterId } from "../generate-voter-id/generate-voter-id";
import { isValidVoterId } from "./is-valid-voter-id";

describe("isValidVoterId", () => {
	it("should validate voter ids", () => {
		const voterId = generateVoterId("SP");
		expect(isValidVoterId(voterId)).toBe(true);
		expect(isValidVoterId(`${voterId.slice(0, -1)}${voterId.endsWith("0") ? "1" : "0"}`)).toBe(
			false,
		);
	});
});
