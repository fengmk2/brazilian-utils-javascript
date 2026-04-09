import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "../format-pis/constants";

/**
 * Removes PIS formatting characters and returns only digits.
 *
 * @param {string|number} value - The PIS value to be parsed.
 * @returns {string} The PIS value without formatting.
 */
export const parsePis = (value: string | number): string =>
	sanitizeToDigits(value).slice(0, LENGTH);
