import { describe, expect, it } from "../_internals/test/runtime";
import { formatCnh } from "./format-cnh";

describe("formatCnh", () => {
	it("should format CNH values", () => {
		expect(formatCnh("00000000119")).toBe("000000001-19");
		expect(formatCnh("000000001")).toBe("000000001");
	});

	it("should remove non numeric characters", () => {
		expect(formatCnh("000.000.001-19")).toBe("000000001-19");
	});
});
