import { VALID_AREA_CODES } from "../_internals/constants/area-codes";
import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";

export type GeneratePhoneType = "mobile" | "landline";

const randomAreaCode = (): string =>
	VALID_AREA_CODES[Math.floor(Math.random() * VALID_AREA_CODES.length)].toString();

export const generatePhone = (type?: GeneratePhoneType): string => {
	const areaCode = randomAreaCode();

	if (type === "landline") {
		return `${areaCode}${2 + Math.floor(Math.random() * 4)}${generateRandomNumber(7)}`;
	}

	if (type === "mobile") {
		return `${areaCode}9${generateRandomNumber(8)}`;
	}

	return Math.random() >= 0.5 ? generatePhone("mobile") : generatePhone("landline");
};
