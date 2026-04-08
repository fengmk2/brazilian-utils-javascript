import { describe, expect, it } from "../_internals/test/runtime";
import { getFormatLicensePlate } from "./get-format-license-plate";

describe("getFormatLicensePlate", () => {
	it("should identify supported formats", () => {
		expect(getFormatLicensePlate("ABC1234")).toBe("LLLNNNN");
		expect(getFormatLicensePlate("ABC1D23")).toBe("LLLNLNN");
		expect(getFormatLicensePlate("ABC12D3")).toBe("LLLNNLN");
	});
});
