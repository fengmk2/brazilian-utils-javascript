import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";
import { LENGTH } from "./constants";

export const parseVoterId = (value: string | number): string => sanitizeToDigits(value).slice(0, LENGTH);
