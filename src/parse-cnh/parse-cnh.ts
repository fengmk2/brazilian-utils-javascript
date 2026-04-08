import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export const parseCnh = (value: string | number): string => sanitizeToDigits(value);
