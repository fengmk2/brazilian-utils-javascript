import { describe, expect, it } from "../_internals/test/runtime";
import { parseCnh } from "./parse-cnh";

describe("parseCnh", () => {
	it("should remove CNH formatting", () => {
		expect(parseCnh("000000001-19")).toBe("00000000119");
	});

	it("should remove non numeric characters", () => {
		expect(parseCnh("000.abc000001-19")).toBe("00000000119");
	});
});
