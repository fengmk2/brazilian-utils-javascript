import { generateRandomNumber } from "../_internals/generate-random-number/generate-random-number";

export const generateCep = (): string => generateRandomNumber(8);
