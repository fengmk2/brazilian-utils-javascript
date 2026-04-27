import { fetchWithRetry } from "../_internals/fetch-with-retry/fetch-with-retry";

type MunicipalityByCodeResponse = {
	nome?: string;
	microrregiao?: {
		mesorregiao?: {
			UF?: {
				sigla?: string;
			};
		};
	};
};

type MunicipalityByNameResponse = {
	id?: number;
	nome?: string;
};

export type GetMunicipalityByCodeOptions = {
	code: string;
};

export type GetMunicipalityByNameOptions = {
	municipalityName: string;
	uf: string;
};

export type GetMunicipalityOptions = GetMunicipalityByCodeOptions | GetMunicipalityByNameOptions;

const normalizeText = (value: string): string =>
	value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\s+/g, " ")
		.trim()
		.toUpperCase();

const getMunicipalityByCode = async (code: string): Promise<[string, string] | null> => {
	let response: Response;
	try {
		response = await fetchWithRetry(
			`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${code}`,
		);
	} catch {
		return null;
	}

	if (!response.ok) return null;

	const data = (await response.json()) as MunicipalityByCodeResponse;
	const name = data.nome;
	const uf = data.microrregiao?.mesorregiao?.UF?.sigla;

	if (!name || !uf) return null;

	return [name, uf];
};

const getMunicipalityCodeByName = async ({
	municipalityName,
	uf,
}: GetMunicipalityByNameOptions): Promise<string | null> => {
	if (!municipalityName || typeof municipalityName !== "string") return null;

	const normalizedUf = uf.trim().toUpperCase();

	if (!/^[A-Z]{2}$/.test(normalizedUf)) return null;

	let response: Response;
	try {
		response = await fetchWithRetry(
			`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${normalizedUf}/municipios`,
		);
	} catch {
		return null;
	}

	if (!response.ok) return null;

	const data = (await response.json()) as MunicipalityByNameResponse[];
	const normalizedName = normalizeText(municipalityName);
	const municipality = data.find((item) => normalizeText(item.nome ?? "") === normalizedName);

	return municipality?.id?.toString() ?? null;
};

export const getMunicipality = async (
	options: GetMunicipalityOptions,
): Promise<[string, string] | null | string> => {
	if ("code" in options) {
		return getMunicipalityByCode(options.code);
	}

	return getMunicipalityCodeByName(options);
};
