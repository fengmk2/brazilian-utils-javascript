import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "./constants";

export const parseLegalNature = (value: string | number): string =>
	sanitizeToDigits(value).slice(0, LENGTH);
