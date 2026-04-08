import { describe, expect, it } from "../_internals/test/runtime";
import { getLegalNatures } from "./get-legal-natures";

describe("getLegalNatures", () => {
	it("should return legal nature entries", () => {
		expect(getLegalNatures()["2062"]).toBe("Sociedade Empresaria Limitada");
	});
});
