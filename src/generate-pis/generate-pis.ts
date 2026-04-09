import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";

const WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;

const calculateCheckDigit = (base: string): string => {
	const sum = base.split("").reduce((acc, digit, index) => acc + Number(digit) * WEIGHTS[index], 0);
	const digit = 11 - (sum % 11);
	return digit >= 10 ? "0" : digit.toString();
};

export const generatePis = (): string => {
	const base = generateRandomNumber(10);
	return `${base}${calculateCheckDigit(base)}`;
};
