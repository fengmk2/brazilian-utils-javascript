import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";

const calculateFirstVerifier = (base: string): { firstVerifier: number; decrement: number } => {
	let sum = 0;

	for (let i = 0; i < 9; i++) {
		sum += (base.charCodeAt(i) - 48) * (9 - i);
	}

	const remainder = sum % 11;

	if (remainder >= 10) {
		return { firstVerifier: 0, decrement: 2 };
	}

	return { firstVerifier: remainder, decrement: 0 };
};

const calculateSecondVerifier = ({
	base,
	decrement,
}: {
	base: string;
	decrement: number;
}): number => {
	let sum = 0;

	for (let i = 0; i < 9; i++) {
		sum += (base.charCodeAt(i) - 48) * (i + 1);
	}

	let secondVerifier = (sum % 11) - decrement;

	if (secondVerifier < 0) secondVerifier += 11;
	if (secondVerifier >= 10) secondVerifier = 0;

	return secondVerifier;
};

export const generateCnh = (): string => {
	let base = generateRandomNumber(9);

	while (/^(\d)\1+$/.test(base)) {
		base = generateRandomNumber(9);
	}

	const { firstVerifier, decrement } = calculateFirstVerifier(base);
	const secondVerifier = calculateSecondVerifier({ base, decrement });

	return `${base}${firstVerifier}${secondVerifier}`;
};
