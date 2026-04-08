import type { StateCode } from "../_internals/constants/states";
import { getHolidays } from "../get-holidays/get-holidays";

export type IsHolidayOptions = {
	targetDate: Date;
	stateCode?: StateCode;
};

export const isHoliday = ({ targetDate, stateCode }: IsHolidayOptions): boolean | null => {
	if (!(targetDate instanceof Date) || Number.isNaN(targetDate.getTime())) {
		return null;
	}

	if (stateCode !== undefined && typeof stateCode !== "string") {
		return null;
	}

	return getHolidays({ year: targetDate.getFullYear(), stateCode }).some((holiday) => {
		return (
			holiday.date.getFullYear() === targetDate.getFullYear() &&
			holiday.date.getMonth() === targetDate.getMonth() &&
			holiday.date.getDate() === targetDate.getDate()
		);
	});
};
