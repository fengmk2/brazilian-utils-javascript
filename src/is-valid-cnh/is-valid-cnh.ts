import { sanitizeToDigits } from "../_internals/sanitize-to-digits/sanitize-to-digits";

const repeatedDigits = (value: string): boolean => value === value[0].repeat(value.length);

export const isValidCnh = (value: string): boolean => {
	if (!value || typeof value !== "string") return false;

	const digits = sanitizeToDigits(value);

	if (digits.length !== 11 || repeatedDigits(digits)) return false;

	let sum1 = 0;
	for (let i = 0; i < 9; i++) {
		sum1 += (digits.charCodeAt(i) - 48) * (9 - i);
	}

	let digit1 = sum1 % 11;
	let decrement = 0;

	if (digit1 >= 10) {
		digit1 = 0;
		decrement = 2;
	}

	if (digit1 !== digits.charCodeAt(9) - 48) return false;

	let sum2 = 0;
	for (let i = 0; i < 9; i++) {
		sum2 += (digits.charCodeAt(i) - 48) * (i + 1);
	}

	let digit2 = (sum2 % 11) - decrement;

	if (digit2 < 0) digit2 += 11;
	if (digit2 >= 10) digit2 = 0;

	return digit2 === digits.charCodeAt(10) - 48;
};
