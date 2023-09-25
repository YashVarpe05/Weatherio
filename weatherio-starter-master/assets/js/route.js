/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; //London location

const currentLocation = () => {
	window.navigator.geolocation.getCurrentPosition(
		(res) => {
			const { latitude, longitude } = res.coords;
			updateWeather(latitude, longitude); // Pass the actual latitude and longitude values
		},
		(err) => {
			window.location.hash = defaultLocation;
		}
	);
};

/**
 * @param {string} query Searched query
 */

const searchedLocation = (query) => updateWeather(query.split("&"));
//
const routes = new Map([
	["/current-location", currentLocation],
	["/weather", searchedLocation],
]);

const checkHash = () => {
	const requestURL = window.location.hash.slice(1);

	const [route, query] = requestURL.includes
		? requestURL.split("?")
		: [requestURL];

	routes.get(routes) ? routes.get(routes)(query) : error404();
};
window.addEventListener("hashchange", checkHash);
window.addEventListener("load", () => {
	if (!window.location.hash) {
		window.location.hash = "#/current-location";
	} else {
		checkHash();
	}
});
