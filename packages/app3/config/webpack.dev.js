/* eslint-disable @typescript-eslint/typedef */

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
const path = require("path");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8083";

const devConfig = {
	mode: "development",
	output: {
		publicPath: "http://localhost:8083/",
		uniqueName: "app3",
	},

	devServer: {
		port: 8083,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
		},
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "app3",
			filename: "remoteEntry.js",
			library: { type: "var", name: "app3" },
			exposes: {
				"./ApplicationPage": "./src/index.ts",
			},

			shared: [
				{
					...deps,
					vue: {
						singleton: true,
						requiredVersion: deps.vue,
					},
				},
			],
		}),
	],
};
module.exports = merge(commonConfig, devConfig);
