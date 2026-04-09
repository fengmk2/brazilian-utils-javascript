import { getFormatLicensePlate } from "../get-format-license-plate/get-format-license-plate";
import { parseLicensePlate } from "../parse-license-plate/parse-license-plate";
import { OLD_FORMAT_SEPARATOR_INDEX } from "./constants";

export const formatLicensePlate = (value: string): string => {
	const parsed = parseLicensePlate(value);

	if (!parsed) return "";

	const format = getFormatLicensePlate(parsed);

	if (format === "LLLNNNN") {
		return `${parsed.slice(0, OLD_FORMAT_SEPARATOR_INDEX)}-${parsed.slice(OLD_FORMAT_SEPARATOR_INDEX)}`;
	}

	if (format) return parsed;

	if (!/^[A-Z]{1,3}$/.test(parsed.slice(0, Math.min(parsed.length, OLD_FORMAT_SEPARATOR_INDEX)))) {
		return "";
	}

	if (parsed.length <= OLD_FORMAT_SEPARATOR_INDEX) return parsed;

	const tail = parsed.slice(OLD_FORMAT_SEPARATOR_INDEX);

	if (/^\d{1,4}$/.test(tail)) {
		return `${parsed.slice(0, OLD_FORMAT_SEPARATOR_INDEX)}-${tail}`;
	}

	if (/^\d[A-Z]\d{0,2}$/.test(tail) || /^\d{2}[A-Z]\d?$/.test(tail)) {
		return parsed;
	}

	return "";
};
