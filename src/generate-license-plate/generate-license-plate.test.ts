import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLicensePlate } from "../is-valid-license-plate/is-valid-license-plate";
import { generateLicensePlate } from "./generate-license-plate";

describe("generateLicensePlate", () => {
	it("should generate valid plates for all supported formats", () => {
		expect(isValidLicensePlate(generateLicensePlate("LLLNNNN"))).toBe(true);
		expect(isValidLicensePlate(generateLicensePlate("LLLNLNN"))).toBe(true);
		expect(isValidLicensePlate(generateLicensePlate("LLLNNLN"))).toBe(true);
	});
});
