import * as CONSTANTS from './app';

const getAppUrl = () => {
	let url = '';

	if (CONSTANTS.DEV_MODE) {
		url = CONSTANTS.APP_URL_DEV;
	} else {
		url = CONSTANTS.APP_URL_PROD;
	}

	return url;
};

export const APP_URL = getAppUrl();
