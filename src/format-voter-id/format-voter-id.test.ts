import { describe, expect, it } from "../_internals/test/runtime";
import { formatVoterId } from "./format-voter-id";

describe("formatVoterId", () => {
	it("should format voter ids", () => {
		expect(formatVoterId("")).toBe("");
		expect(formatVoterId("1")).toBe("1");
		expect(formatVoterId("12")).toBe("12");
		expect(formatVoterId("123")).toBe("123");
		expect(formatVoterId("1234")).toBe("1234");
		expect(formatVoterId("12345")).toBe("1234 5");
		expect(formatVoterId("123456")).toBe("1234 56");
		expect(formatVoterId("1234567")).toBe("1234 567");
		expect(formatVoterId("12345678")).toBe("1234 5678");
		expect(formatVoterId("123456780")).toBe("1234 5678 0");
		expect(formatVoterId("1234567801")).toBe("1234 5678 01");
		expect(formatVoterId("12345678012")).toBe("1234 5678 01 2");
		expect(formatVoterId("123456780124")).toBe("1234 5678 01 24");
	});
});
