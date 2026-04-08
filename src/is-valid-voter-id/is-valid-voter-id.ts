import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

const isValidLength = (value: string): boolean => {
	if (value.length === 12) return true;

	const federativeUnion = value.slice(-4, -2);
	return value.length === 13 && (federativeUnion === "01" || federativeUnion === "02");
};

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

export const isValidVoterId = (value: string): boolean => {
	if (!value || typeof value !== "string") return false;

	const digits = sanitizeToDigits(value);

	if (!isValidLength(digits)) return false;

	const sequentialNumber = digits.slice(0, 8);
	const federativeUnion = digits.slice(-4, -2);
	const verifier = digits.slice(-2);

	const ufCode = Number(federativeUnion);

	if (!Number.isInteger(ufCode) || ufCode < 1 || ufCode > 28) return false;

	const digit1 = calculateFirstDigit({ sequentialNumber, federativeUnion });
	const digit2 = calculateSecondDigit({ federativeUnion, firstDigit: digit1 });

	return verifier === `${digit1}${digit2}`;
};
