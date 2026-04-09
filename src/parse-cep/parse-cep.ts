import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "../format-cep/constants";

/**
 * Removes CEP formatting characters and returns only digits.
 *
 * @param {string|number} value - The CEP value to be parsed.
 * @returns {string} The CEP value without formatting.
 */
export const parseCep = (value: string | number): string =>
	sanitizeToDigits(value).slice(0, LENGTH);
