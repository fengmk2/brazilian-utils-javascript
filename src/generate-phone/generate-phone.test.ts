import { describe, expect, it } from "../_internals/test/runtime";
import { isValidLandlinePhone } from "../is-valid-landline-phone/is-valid-landline-phone";
import { isValidMobilePhone } from "../is-valid-mobile-phone/is-valid-mobile-phone";
import { isValidPhone } from "../is-valid-phone/is-valid-phone";
import { generatePhone } from "./generate-phone";

describe("generatePhone", () => {
	it("should generate a valid mobile phone", () => {
		expect(isValidMobilePhone(generatePhone("mobile"), { version: 2 })).toBe(true);
	});

	it("should generate a valid landline phone", () => {
		expect(isValidLandlinePhone(generatePhone("landline"))).toBe(true);
	});

	it("should generate a valid phone when type is omitted", () => {
		expect(isValidPhone(generatePhone())).toBe(true);
	});
});
