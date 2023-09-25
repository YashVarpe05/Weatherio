/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright yash_varpe 2023 All rights reserved
 * @author yash_varpe <yashvarpe2005@gmail.com>
 */

"use strict";
const api_key = "7fb0f71797c059a1ba3cb7a387646478";

/**
 * Fetch data from server
 * @param {String} URL API url
 * @param {Function} callback callback
 */

export const fetchData = (URL, callback) => {
	fetch(`${URL}&appid=${api_key}`)
		.then((res) => res.json())
		.then((data) => callback(data))
		.catch((error) => {
			console.log("Error fetching data:", error);
		});
};

export const url = {
	currentWeather(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
	},
	forecast(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
	},
	airPollution(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
	},
	reverseGeo(lat, lon) {
		return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
	},
	/**
	 * @param {string} query Searching query eg. 'India' , Maharashtra,London ....etc
	 */
	geo(query) {
		const encodedQuery = encodeURIComponent(query);
		return `https://api.openweathermap.org/geo/1.0/direct?q=${encodedQuery}&limit=5&appid=${api_key}`;
	},
};
