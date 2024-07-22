import dayjs from "dayjs";

/**
 * Generates a matrix representing the days of the specified month.
 *
 * @param {number} [month=dayjs().month()] - The month for which to generate the day matrix (0-11). Defaults to the current month.
 * @returns {Array<Array<dayjs.Dayjs>>} A 2D array representing the weeks and days of the month.
 *
 * @example
 * // Generate the day matrix for the current month
 * const matrix = getMonth();
 * console.log(matrix);
 *
 * @example
 * // Generate the day matrix for January
 * const januaryMatrix = getMonth(0);
 * console.log(januaryMatrix);
 */
export const getMonth = (month = dayjs().month()) => {
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, -1)).day();
	let currentMonthCount = 6 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});

	return dayMatrix;
};
