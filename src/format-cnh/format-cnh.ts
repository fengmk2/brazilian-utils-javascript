import { type FormatParams, format } from "../_internals/format/format";
import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export type FormatCnhOptions = Pick<FormatParams, "pad">;

export const formatCnh = (value: string | number, options?: FormatCnhOptions): string =>
	format({
		pad: options?.pad,
		value: sanitizeToDigits(value),
		pattern: "000000000-00",
	});
