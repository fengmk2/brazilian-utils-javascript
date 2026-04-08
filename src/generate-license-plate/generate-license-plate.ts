const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export type GenerateLicensePlateFormat = "LLLNNNN" | "LLLNLNN" | "LLLNNLN";

const randomLetter = (): string => LETTERS[Math.floor(Math.random() * LETTERS.length)];

const randomDigit = (): string => Math.floor(Math.random() * 10).toString();

export const generateLicensePlate = (format: GenerateLicensePlateFormat = "LLLNLNN"): string => {
	return format
		.split("")
		.map((char) => (char === "L" ? randomLetter() : randomDigit()))
		.join("");
};
