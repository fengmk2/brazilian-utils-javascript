import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "./constants";

/**
 * Removes phone formatting characters, returns only digits, and caps the result to 11 digits.
 *
 * @param {string|number} value - The phone value to be parsed.
 * @returns {string} The phone value without formatting.
 */
export const parsePhone = (value: string | number): string => sanitizeToDigits(value).slice(0, LENGTH);
