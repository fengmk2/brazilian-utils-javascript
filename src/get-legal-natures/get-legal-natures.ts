import { LEGAL_NATURE } from "../is-valid-legal-nature/constants";

export const getLegalNatures = (): Record<string, string> => ({ ...LEGAL_NATURE });
