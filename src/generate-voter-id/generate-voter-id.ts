import type { StateCode } from "../_internals/constants/states";
import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";
import { UF_TO_VOTER_ID_CODE } from "../is-valid-voter-id/constants";

const calculateFirstDigit = ({
	sequentialNumber,
	federativeUnion,
}: {
	sequentialNumber: string;
	federativeUnion: string;
}): number => {
	let sum = 0;

	for (let i = 0; i < 8; i++) {
		sum += (sequentialNumber.charCodeAt(i) - 48) * (i + 2);
	}

	const remainder = sum % 11;

	if (remainder === 0 && (federativeUnion === "01" || federativeUnion === "02")) {
		return 1;
	}

	return remainder === 10 ? 0 : remainder;
};

const calculateSecondDigit = ({
	federativeUnion,
	firstDigit,
}: {
	federativeUnion: string;
	firstDigit: number;
}): number => {
	const sum =
		(federativeUnion.charCodeAt(0) - 48) * 7 +
		(federativeUnion.charCodeAt(1) - 48) * 8 +
		firstDigit * 9;

	const remainder = sum % 11;

	if ((federativeUnion === "01" || federativeUnion === "02") && remainder === 0) {
		return 1;
	}

	return remainder === 10 ? 0 : remainder;
};

export const generateVoterId = (state: StateCode | "ZZ" = "ZZ"): string => {
	const federativeUnion = UF_TO_VOTER_ID_CODE[state];
	const sequentialNumber = generateRandomNumber(8);
	const digit1 = calculateFirstDigit({ sequentialNumber, federativeUnion });
	const digit2 = calculateSecondDigit({ federativeUnion, firstDigit: digit1 });

	return `${sequentialNumber}${federativeUnion}${digit1}${digit2}`;
};
