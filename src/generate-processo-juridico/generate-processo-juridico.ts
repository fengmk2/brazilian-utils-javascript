import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";

export type GenerateProcessoJuridicoOptions = {
	year?: number;
	court?: number;
};

const calculateCheckDigits = (base: string): string => {
	const checksum = 98n - ((BigInt(base) * 100n) % 97n);
	return checksum.toString().padStart(2, "0");
};

export const generateProcessoJuridico = (
	options: GenerateProcessoJuridicoOptions = {},
): string | null => {
	const { year = new Date().getFullYear(), court = Math.floor(Math.random() * 9) + 1 } = options;
	const currentYear = new Date().getFullYear();

	if (
		!Number.isInteger(year) ||
		year < currentYear ||
		!Number.isInteger(court) ||
		court < 1 ||
		court > 9
	) {
		return null;
	}

	const sequencial = generateRandomNumber(7);
	const tribunal = generateRandomNumber(2);
	const foro = generateRandomNumber(4);
	const base = `${sequencial}${year}${court}${tribunal}${foro}`;
	const checkDigits = calculateCheckDigits(base);

	return `${sequencial}${checkDigits}${year}${court}${tribunal}${foro}`;
};
