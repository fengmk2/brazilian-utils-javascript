import { describe, expect, it } from "../_internals/test/runtime";
import { formatLicensePlate } from "./format-license-plate";

describe("formatLicensePlate", () => {
	it("should format old pattern license plates", () => {
		expect(formatLicensePlate("abc1234")).toBe("ABC-1234");
	});

	it("should keep mercosul plates normalized", () => {
		expect(formatLicensePlate("abc1d23")).toBe("ABC1D23");
	});
});
