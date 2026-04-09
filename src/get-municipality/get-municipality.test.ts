import { afterEach, beforeEach, describe, expect, it, vi } from "../_internals/test/runtime";
import { getMunicipality } from "./get-municipality";

describe("getMunicipality", () => {
	const fetchMock = vi.fn();
	const originalFetch = globalThis.fetch;

	beforeEach(() => {
		globalThis.fetch = fetchMock as unknown as typeof fetch;
		fetchMock.mockClear();
	});

	afterEach(() => {
		globalThis.fetch = originalFetch;
		vi.restoreAllMocks();
	});

	it("should get municipality code by name", async () => {
		fetchMock.mockResolvedValueOnce({
			ok: true,
			json: async () => [{ id: 3550308, nome: "São Paulo" }],
		});

		await expect(getMunicipality({ municipalityName: "Sao Paulo", uf: "sp" })).resolves.toBe(
			"3550308",
		);
	});

	it("should get municipality name and UF by code", async () => {
		fetchMock.mockResolvedValueOnce({
			ok: true,
			json: async () => ({
				microrregiao: { mesorregiao: { UF: { sigla: "SP" } } },
				nome: "São Paulo",
			}),
		});

		await expect(getMunicipality({ code: "3550308" })).resolves.toEqual(["São Paulo", "SP"]);
	});
});
