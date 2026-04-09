import { format } from "../_internals/format/format";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export const formatLegalNature = (value: string | number): string =>
	format({
		value: sanitizeToDigits(value),
		pattern: "000-0",
	});
