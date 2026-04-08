import { LEGAL_NATURE } from "../is-valid-legal-nature/constants";

const LEGAL_NATURE_CODES = Object.keys(LEGAL_NATURE);

export const generateLegalNature = (): string =>
	LEGAL_NATURE_CODES[Math.floor(Math.random() * LEGAL_NATURE_CODES.length)];
