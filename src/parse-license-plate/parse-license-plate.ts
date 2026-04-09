import { sanitizeToAlphanumeric } from "../_internals/sanitize-to-alphanumeric/sanitize-to-alphanumeric";
import { LENGTH } from "./constants";

export const parseLicensePlate = (value: string): string => {
	if (!value || typeof value !== "string") return "";
	return sanitizeToAlphanumeric(value).slice(0, LENGTH);
};
