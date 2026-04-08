export const parseLicensePlate = (value: string): string => {
	if (!value || typeof value !== "string") return "";
	return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
};
