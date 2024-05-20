/* eslint-disable @typescript-eslint/typedef */

const prefixer = require("postcss-prefix-selector");

module.exports = {
	plugins: [
		prefixer({
			prefix: "#single-spa-application\\:app1",
		}),
	],
};
