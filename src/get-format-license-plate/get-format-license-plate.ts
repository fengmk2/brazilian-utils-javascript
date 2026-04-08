import { parseLicensePlate } from "../parse-license-plate/parse-license-plate";
import { MERCOSUL_CAR_REGEX, MERCOSUL_MOTORCYCLE_REGEX, OLD_FORMAT_REGEX } from "./constants";

export type LicensePlateFormat = "LLLNNNN" | "LLLNLNN" | "LLLNNLN";

export const getFormatLicensePlate = (value: string): LicensePlateFormat | null => {
	const parsed = parseLicensePlate(value);

	if (OLD_FORMAT_REGEX.test(parsed)) return "LLLNNNN";
	if (MERCOSUL_CAR_REGEX.test(parsed)) return "LLLNLNN";
	if (MERCOSUL_MOTORCYCLE_REGEX.test(parsed)) return "LLLNNLN";

	return null;
};
