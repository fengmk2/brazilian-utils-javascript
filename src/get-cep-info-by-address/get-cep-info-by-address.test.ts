import { afterEach, beforeEach, describe, expect, it, vi } from "../_internals/test/runtime";
import { GetCepInfoByAddressValidationError, getCepInfoByAddress } from "./get-cep-info-by-address";

describe("getCepInfoByAddress", () => {
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

	it("should validate UF before fetching", async () => {
		await expect(
			getCepInfoByAddress({
				federalUnit: "XX",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).rejects.toThrow(GetCepInfoByAddressValidationError);
	});

	it("should return addresses from ViaCEP", async () => {
		fetchMock.mockResolvedValueOnce({
			ok: true,
			json: async () => [
				{
					bairro: "Bela Vista",
					cep: "01310-100",
					localidade: "São Paulo",
					logradouro: "Avenida Paulista",
					uf: "SP",
				},
			],
		});

		await expect(
			getCepInfoByAddress({
				federalUnit: "SP",
				city: "São Paulo",
				street: "Avenida Paulista",
			}),
		).resolves.toEqual([
			{
				bairro: "Bela Vista",
				cep: "01310-100",
				localidade: "São Paulo",
				logradouro: "Avenida Paulista",
				uf: "SP",
			},
		]);
	});
});
