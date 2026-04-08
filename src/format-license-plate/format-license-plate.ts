import { getFormatLicensePlate } from "../get-format-license-plate/get-format-license-plate";
import { parseLicensePlate } from "../parse-license-plate/parse-license-plate";
import { OLD_FORMAT_SEPARATOR_INDEX } from "./constants";

export const formatLicensePlate = (value: string): string => {
	const parsed = parseLicensePlate(value);
	const format = getFormatLicensePlate(parsed);

	if (!format) return "";

	if (format === "LLLNNNN") {
		return `${parsed.slice(0, OLD_FORMAT_SEPARATOR_INDEX)}-${parsed.slice(OLD_FORMAT_SEPARATOR_INDEX)}`;
	}

	return parsed;
};
