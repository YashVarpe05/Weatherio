"use strict";

export const weekDayNames = [
	"Sunday",
	"Monday",
	"Tueday",
	"Wednesday",
	"Thurday",
	"Friday",
	"Saturday",
];

export const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Oct",
	"Nov",
	"Dec",
];

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date string. formate: "Sunday 10, jan"
 */
export const getDate = function (dateUnix, timezone) {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayName = weekDayNames[date.getUTCDay()];
	const monthName = monthNames[date.getUTCMonth()];

	return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "12:08 PM"
 */

export const getTime = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const period = hours >= 12 ? "PM" : "AM";
	console.log(minutes);

	if (minutes < 10) {
		return `${hours % 12 || 12}:0${minutes} ${period}`;
	} else return `${hours % 12 || 12}:${minutes} ${period}`;
};
/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */

export const getHours = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const period = hours >= 12 ? "PM" : "AM";
	return `${hours % 12 || 12} ${period}`;
};

/**
 *
 * @param {number} mps meters per second
 * @returns {number} kilometer per hour
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
			"Air quality is acceptable; however, there may be some health concern for a small number of unusually sensitive people.",
	},
	3: {
		level: "Moderate",
		message:
			"When air quality is in this range, people who are in sensitive groups, whether the increased risk is due to medical conditions, exposure conditions, or innate susceptibility.",
	},
	4: {
		level: "Unhealthy",
		message:
			"When air quality is in this range, everyone who is active outdoors may experience effects. ",
	},
	5: {
		level: "Hazardous",
		message:
			"Air quality in this range triggers health warnings of emergency conditions by media outlets",
	},
};
