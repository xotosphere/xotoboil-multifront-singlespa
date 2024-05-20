/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8084";

const prodConfig = {
	mode: "production",

	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "[name].[contenthash].js",
	},

	plugins: [
		new CleanWebpackPlugin(),
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

module.exports = merge(commonConfig, prodConfig);
