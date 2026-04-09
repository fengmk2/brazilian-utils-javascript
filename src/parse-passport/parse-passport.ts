import { sanitizeToAlphanumeric } from "../_internals/sanitize-to-alphanumeric/sanitize-to-alphanumeric";
import { LENGTH } from "./constants";

/**
 * Removes non-alphanumeric characters from a passport number, uppercases it, and caps it to 8 characters.
 *
 * @param passport - The string containing a passport number.
 * @returns The normalized passport number.
 *
 * @example
 * parsePassport("Ab123456") // "AB123456"
 * parsePassport("Ab-123456") // "AB123456"
 * parsePassport("Ab -. 123456") // "AB123456"
 */
export const parsePassport = (passport: string): string => {
	if (!passport || typeof passport !== "string") return "";
	return sanitizeToAlphanumeric(passport).slice(0, LENGTH);
};
