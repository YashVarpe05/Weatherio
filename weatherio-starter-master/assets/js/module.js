/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
// todo: add the 7 day and months and make the function that is use to generate or get the date and time
"use strict";

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

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC to seconds
 * @returns {string} Date String. Format:"Sunday 10,Jan"
 */

export const getData = (dateUnix, timezone) => {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayNames = weekDayNames[date.getUTCDay()];
	const monthName = monthName[date.getUTCMonth()];
	return `${weekDayNames} ${date.getUTCDate()},${monthName} `;
};
/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC in seconds
 * @returns {string} timeSharing format :'HH AM/PM'
 */

export const getTime = (timeUnix, timezone) => {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const period = hours >= 12 ? "PM" : "AM";

	return `${hour % 12 || 12} ${period}`;
};

/**
 * @param {number} mps Meter per seconds
 * @returns {number} kilometer per hours
 */

export const mps_to_kmh = (mps) => {
	const mph = mps * 3600;
	return mph / 1000;
};

export const aqiText = {
	1: {
		level: "Good",
		message:
			"Air quality is considered satisfactory, and air pollution poses little or no risk",
	},
	2: {
		level: "Fair",
		message:
			"Air quality is acceptable; however , for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
	},
	3: {
		level: "Moderate",
		message:
			"Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
	},
	4: {
		level: "Poor",
		message:
			"Everyone may begin experience heath effects ; members of sensitive group may experience more serious health effects.",
	},
	5: {
		level: "Very Poor",
		message:
			"Air quality is acceptable; However , for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
	},
};
