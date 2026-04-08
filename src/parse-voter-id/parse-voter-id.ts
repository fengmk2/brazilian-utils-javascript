import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

export const parseVoterId = (value: string | number): string => sanitizeToDigits(value);
