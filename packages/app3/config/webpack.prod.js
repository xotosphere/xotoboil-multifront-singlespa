/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8083";

const prodConfig = {
	mode: "production",
	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "[name].[contenthash].js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ModuleFederationPlugin({
			name: "app3",
			filename: "remoteEntry.js",
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

module.exports = merge(commonConfig, prodConfig);
