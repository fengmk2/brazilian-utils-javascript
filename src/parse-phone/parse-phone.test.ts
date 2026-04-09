import { describe, expect, it } from "../_internals/test/runtime";
import { parsePhone } from "./parse-phone";

describe("parsePhone", () => {
	it("should remove phone mask characters", () => {
		expect(parsePhone("(11) 98888-7777")).toBe("11988887777");
		expect(parsePhone("98888-7777")).toBe("988887777");
	});

	it("should remove non numeric characters", () => {
		expect(parsePhone("+55 (11) 98888-7777")).toBe("55119888877");
	});

	it("should ignore digits after the phone length", () => {
		expect(parsePhone("11988887777123")).toBe("11988887777");
	});
});
