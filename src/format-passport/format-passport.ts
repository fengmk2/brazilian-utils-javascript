import { sanitizeToAlphanumeric } from "../_internals/sanitize-to-alphanumeric/sanitize-to-alphanumeric";
import { LENGTH } from "./constants";

/**
 * Formats a Brazilian passport number for display.
 * Converts to uppercase and removes all non-alphanumeric characters.
 *
 * @param passport - A Brazilian passport number (any case, possibly with symbols).
 * @returns The formatted passport number (uppercase, no symbols), or an empty string if invalid.
 *
 * @example
 * formatPassport("ab123456") // "AB123456"
 * formatPassport("AB-123.456") // "AB123456"
 * formatPassport("") // ""
 */
export const formatPassport = (passport: string): string => {
	if (!passport || typeof passport !== "string") return "";
	return sanitizeToAlphanumeric(passport).slice(0, LENGTH);
};
