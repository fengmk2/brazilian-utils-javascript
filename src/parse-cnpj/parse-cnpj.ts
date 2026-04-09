import { sanitizeToAlphanumeric } from "../_internals/sanitize-to-alphanumeric/sanitize-to-alphanumeric";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "../format-cnpj/constants";
import type { FormatCnpjOptions } from "../format-cnpj/format-cnpj";

const sanitize = (value: string | number, version?: FormatCnpjOptions["version"]): string => {
	if (version === 2) {
		return sanitizeToAlphanumeric(value);
	}

	return sanitizeToDigits(value);
};

/**
 * Removes CNPJ formatting characters and returns a normalized value.
 *
 * @param {string|number} value - The CNPJ value to be parsed.
 * @param {Object} options - Optional parsing options.
 * @param {1|2} options.version - The CNPJ version to normalize.
 * @returns {string} The CNPJ value without formatting.
 */
export const parseCnpj = (
	value: string | number,
	options?: Pick<FormatCnpjOptions, "version">,
): string => sanitize(value, options?.version).slice(0, LENGTH);
