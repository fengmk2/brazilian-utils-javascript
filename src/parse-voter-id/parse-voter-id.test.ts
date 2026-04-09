import { describe, expect, it } from "../_internals/test/runtime";
import { parseVoterId } from "./parse-voter-id";

describe("parseVoterId", () => {
	it("should remove voter id formatting", () => {
		expect(parseVoterId("1234 5678 01 24")).toBe("123456780124");
	});

	it("should ignore digits after the voter id length", () => {
		expect(parseVoterId("12345678012499")).toBe("123456780124");
	});
});
