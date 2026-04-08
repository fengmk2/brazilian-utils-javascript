import { describe, expect, it } from "../_internals/test/runtime";
import { formatVoterId } from "./format-voter-id";

describe("formatVoterId", () => {
	it("should format voter ids", () => {
		expect(formatVoterId("123456780124")).toBe("1234 5678 01 24");
	});
});
