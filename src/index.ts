export { type CapitalizeOptions, capitalize } from "./capitalize/capitalize";
export { type FormatBoletoOptions, formatBoleto } from "./format-boleto/format-boleto";
export { type FormatCepOptions, formatCep } from "./format-cep/format-cep";
export { type FormatCnhOptions, formatCnh } from "./format-cnh/format-cnh";
export { type FormatCnpjOptions, formatCnpj } from "./format-cnpj/format-cnpj";
export { type FormatCpfOptions, formatCpf } from "./format-cpf/format-cpf";
export { type FormatCurrencyOptions, formatCurrency } from "./format-currency/format-currency";
export { formatLegalNature } from "./format-legal-nature/format-legal-nature";
export { formatLicensePlate } from "./format-license-plate/format-license-plate";
export { formatPassport } from "./format-passport/format-passport";
export { type FormatPhoneOptions, formatPhone } from "./format-phone/format-phone";
export { type FormatPisOptions, formatPis } from "./format-pis/format-pis";
export {
	type FormatProcessoJuridicoOptions,
	formatProcessoJuridico,
} from "./format-processo-juridico/format-processo-juridico";
export { formatVoterId } from "./format-voter-id/format-voter-id";
export { generateBoleto } from "./generate-boleto/generate-boleto";
export { generateCep } from "./generate-cep/generate-cep";
export { generateCnh } from "./generate-cnh/generate-cnh";
export { generateCnpj } from "./generate-cnpj/generate-cnpj";
export { generateCpf } from "./generate-cpf/generate-cpf";
export { generateLegalNature } from "./generate-legal-nature/generate-legal-nature";
export { generateLicensePlate } from "./generate-license-plate/generate-license-plate";
export { generatePassport } from "./generate-passport/generate-passport";
export { generatePhone, type GeneratePhoneType } from "./generate-phone/generate-phone";
export { generatePis } from "./generate-pis/generate-pis";
export {
	type GenerateProcessoJuridicoOptions,
	generateProcessoJuridico,
} from "./generate-processo-juridico/generate-processo-juridico";
export { generateVoterId } from "./generate-voter-id/generate-voter-id";
export {
	GetAddressInfoByCepError,
	GetAddressInfoByCepNotFoundError,
	type GetAddressInfoByCepOptions,
	GetAddressInfoByCepServiceError,
	GetAddressInfoByCepValidationError,
	getAddressInfoByCep,
} from "./get-address-info-by-cep/get-address-info-by-cep";
export { getBoletoInfo } from "./get-boleto-info/get-boleto-info";
export { getCities } from "./get-cities/get-cities";
export {
	GetCepInfoByAddressError,
	GetCepInfoByAddressNotFoundError,
	type CepAddressInfo,
	type GetCepInfoByAddressOptions,
	GetCepInfoByAddressValidationError,
	getCepInfoByAddress,
} from "./get-cep-info-by-address/get-cep-info-by-address";
export {
	getFormatLicensePlate,
	type LicensePlateFormat,
} from "./get-format-license-plate/get-format-license-plate";
export { type GetHolidaysOptions, getHolidays } from "./get-holidays/get-holidays";
export { getLegalNatures } from "./get-legal-natures/get-legal-natures";
export {
	type GetMunicipalityByCodeOptions,
	type GetMunicipalityByNameOptions,
	type GetMunicipalityOptions,
	getMunicipality,
} from "./get-municipality/get-municipality";
export { getStates } from "./get-states/get-states";
export { type IsHolidayOptions, isHoliday } from "./is-holiday/is-holiday";
export {
	type IsValidBankAccountOptions,
	isValidBankAccount,
} from "./is-valid-bank-account/is-valid-bank-account";
export { isValidBoleto } from "./is-valid-boleto/is-valid-boleto";
export { isValidCep } from "./is-valid-cep/is-valid-cep";
export { isValidCnh } from "./is-valid-cnh/is-valid-cnh";
export { isValidCnpj } from "./is-valid-cnpj/is-valid-cnpj";
export { isValidCpf } from "./is-valid-cpf/is-valid-cpf";
export { isValidEmail } from "./is-valid-email/is-valid-email";
export { isValidIe } from "./is-valid-ie/is-valid-ie";
export { isValidLandlinePhone } from "./is-valid-landline-phone/is-valid-landline-phone";
export { isValidLegalNature } from "./is-valid-legal-nature/is-valid-legal-nature";
export { isValidLicensePlate } from "./is-valid-license-plate/is-valid-license-plate";
export {
	type IsValidMobilePhoneOptions,
	isValidMobilePhone,
} from "./is-valid-mobile-phone/is-valid-mobile-phone";
export { isValidPassport } from "./is-valid-passport/is-valid-passport";
export { type IsValidPhoneOptions, isValidPhone } from "./is-valid-phone/is-valid-phone";
export { isValidPis } from "./is-valid-pis/is-valid-pis";
export { isValidProcessoJuridico } from "./is-valid-processo-juridico/is-valid-processo-juridico";
export { isValidRenavam } from "./is-valid-renavam/is-valid-renavam";
export { isValidVoterId } from "./is-valid-voter-id/is-valid-voter-id";
export { parseBoleto } from "./parse-boleto/parse-boleto";
export { parseCep } from "./parse-cep/parse-cep";
export { parseCnh } from "./parse-cnh/parse-cnh";
export { parseCnpj } from "./parse-cnpj/parse-cnpj";
export { parseCpf } from "./parse-cpf/parse-cpf";
export { parseCurrency } from "./parse-currency/parse-currency";
export { parseLegalNature } from "./parse-legal-nature/parse-legal-nature";
export { parseLicensePlate } from "./parse-license-plate/parse-license-plate";
export { parsePassport } from "./parse-passport/parse-passport";
export { parsePhone } from "./parse-phone/parse-phone";
export { parsePis } from "./parse-pis/parse-pis";
export { parseProcessoJuridico } from "./parse-processo-juridico/parse-processo-juridico";
export { parseVoterId } from "./parse-voter-id/parse-voter-id";

// ============================================================================
// DEPRECATED EXPORTS - Will be removed in v3.0.0
// ============================================================================

/**
 * @deprecated Use `IsValidBankAccountOptions` instead. This alias will be removed in v3.0.0
 */
export type { IsValidBankAccountParams } from "./is-valid-bank-account/is-valid-bank-account";

/**
 * @deprecated Use `formatCep` instead. This alias will be removed in v3.0.0
 */
export { formatCep as formatCEP } from "./format-cep/format-cep";

/**
 * @deprecated Use `formatCnpj` instead. This alias will be removed in v3.0.0
 */
export { formatCnpj as formatCNPJ } from "./format-cnpj/format-cnpj";

/**
 * @deprecated Use `formatCpf` instead. This alias will be removed in v3.0.0
 */
export { formatCpf as formatCPF } from "./format-cpf/format-cpf";
/**
 * @deprecated Use `generateCnpj` instead. This alias will be removed in v3.0.0
 */
export { generateCnpj as generateCNPJ } from "./generate-cnpj/generate-cnpj";
/**
 * @deprecated Use `generateCpf` instead. This alias will be removed in v3.0.0
 */
export { generateCpf as generateCPF } from "./generate-cpf/generate-cpf";
/**
 * @deprecated Use `isValidCep` instead. This alias will be removed in v3.0.0
 */
export { isValidCep as isValidCEP } from "./is-valid-cep/is-valid-cep";
/**
 * @deprecated Use `isValidCnpj` instead. This alias will be removed in v3.0.0
 */
export { isValidCnpj as isValidCNPJ } from "./is-valid-cnpj/is-valid-cnpj";
/**
 * @deprecated Use `isValidCpf` instead. This alias will be removed in v3.0.0
 */
export { isValidCpf as isValidCPF } from "./is-valid-cpf/is-valid-cpf";
/**
 * @deprecated Use `isValidIe` instead. This alias will be removed in v3.0.0
 */
export { isValidIe as isValidIE } from "./is-valid-ie/is-valid-ie";
/**
 * @deprecated Use `isValidPis` instead. This alias will be removed in v3.0.0
 */
export { isValidPis as isValidPIS } from "./is-valid-pis/is-valid-pis";
