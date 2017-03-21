import * as request from 'request';
import { urls } from '../constants/urls';

export let queryData = function (type, queryString) {
	return new Promise((resolve, reject) => {
		request(`${urls[type]}${queryString}`, function (error, response, body) {
			resolve((JSON.parse(body)));
		});
	});
};



