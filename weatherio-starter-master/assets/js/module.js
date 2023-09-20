/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
// todo: add the 7 day and months and make the function that is use to generate or get the date and time

export const weekDayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const monthName = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const getData = (dateUnix, timezone) => {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayNames = weekDayNames[date.getUTCDay()];
	const monthName = monthName[date.getUTCMonth()];
	return `${weekDayNames} ${date.getUTCDate()},${monthName} `;
};
