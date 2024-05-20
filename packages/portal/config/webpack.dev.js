/* eslint-disable @typescript-eslint/typedef */

const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8084";

const devConfig = {
	mode: "development",

	devServer: {
		port: 8084,
		historyApiFallback: {
			index: "index.html",
		},
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "portal",
			filename: "remoteEntry.js",
			exposes: {
				"./App": "./src/App",
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
