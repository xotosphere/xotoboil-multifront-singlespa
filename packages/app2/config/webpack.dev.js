/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const path = require("path");
__webpack_base_uri__ = "http://localhost:8082";

const devConfig = {
	entry: path.resolve(process.cwd(), "src/index.ts"),

	mode: "development",

	devServer: {
		port: 8082,
		historyApiFallback: {
			index: "index.html",
		},
		liveReload: true,
		headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS", "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization" },
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "app2",
			filename: "remoteEntry.js",
			exposes: {
				"./ApplicationPage": "./src/index",
			},
			shared: [
				{
					...deps,
					react: {
						singleton: true,
						requiredVersion: deps.react,
					},
					"react-dom": {
						singleton: true,
						requiredVersion: deps["react-dom"],
					},
				},
			],
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
