import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LEGAL_NATURE } from "./constants";

export const isValidLegalNature = (code: string): boolean => {
	if (!code || typeof code !== "string") return false;

	const normalized = sanitizeToDigits(code);

	return normalized.length === 4 && normalized in LEGAL_NATURE;
};
