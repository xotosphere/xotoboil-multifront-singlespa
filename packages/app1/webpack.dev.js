/* eslint-disable @typescript-eslint/typedef */
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const prefixer = require("postcss-prefix-selector");
__webpack_base_uri__ = "http://localhost:8081";

module.exports = {
	output: {
		publicPath: "http://localhost:8081/",
		uniqueName: "app1",
	},

	optimization: {
		runtimeChunk: false,
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "app1",
			library: { type: "var", name: "app1" },
			filename: "remoteEntry.js",
			exposes: {
				"./ApplicationPage": "./src/index.ts",
			},
		}),
	],
};
