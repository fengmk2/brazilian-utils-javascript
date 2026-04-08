import { format } from "../_internals/format/format";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export const formatVoterId = (value: string | number): string =>
	format({ value: sanitizeToDigits(value), pattern: "0000 0000 00 00" });
