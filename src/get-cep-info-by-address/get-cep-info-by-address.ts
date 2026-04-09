import { DATA as STATES, type StateCode } from "../_internals/constants/states";

export class GetCepInfoByAddressError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "GetCepInfoByAddressError";
	}
}

export class GetCepInfoByAddressValidationError extends GetCepInfoByAddressError {
	constructor(message: string) {
		super(message);
		this.name = "GetCepInfoByAddressValidationError";
	}
}

export class GetCepInfoByAddressNotFoundError extends GetCepInfoByAddressError {
	constructor(message: string) {
		super(message);
		this.name = "GetCepInfoByAddressNotFoundError";
	}
}

export type CepAddressInfo = {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge?: string;
	gia?: string;
	ddd?: string;
	siafi?: string;
};

export type GetCepInfoByAddressOptions = {
	federalUnit: string;
	city: string;
	street: string;
};

const VALID_STATE_CODES = new Set<StateCode>(STATES.map((state) => state.code));

const isStateCode = (value: string): value is StateCode =>
	VALID_STATE_CODES.has(value as StateCode);

const normalizeAddressPart = (value: string): string =>
	value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.trim();

export const getCepInfoByAddress = async ({
	federalUnit,
	city,
	street,
}: GetCepInfoByAddressOptions): Promise<CepAddressInfo[]> => {
	const normalizedUf = federalUnit.trim().toUpperCase();

	if (!isStateCode(normalizedUf)) {
		throw new GetCepInfoByAddressValidationError(`Invalid UF: ${federalUnit}`);
	}

	if (!city || !street) {
		throw new GetCepInfoByAddressValidationError("City and street are required");
	}

	const response = await fetch(
		`https://viacep.com.br/ws/${normalizedUf}/${encodeURIComponent(normalizeAddressPart(city))}/${encodeURIComponent(normalizeAddressPart(street))}/json/`,
	);

	if (!response.ok) {
		throw new GetCepInfoByAddressError(`ViaCEP request failed with status ${response.status}`);
	}

	const data = (await response.json()) as CepAddressInfo[];

	if (!Array.isArray(data) || data.length === 0) {
		throw new GetCepInfoByAddressNotFoundError(`${normalizedUf} - ${city} - ${street}`);
	}

	return data;
};
