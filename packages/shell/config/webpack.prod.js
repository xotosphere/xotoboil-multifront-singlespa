/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
var path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8080";

const prodConfig = {
	mode: "production",

	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "[name].[contenthash].js",
	},

	plugins: [
		new CleanWebpackPlugin(),
		new ModuleFederationPlugin({
			name: "shell",
			filename: "remoteEntry.js",
			shared: [
				{
					...deps,
				},
			],
			remotes: {
				app1: "app1@http://localhost:8081/remoteEntry.js",
				app2: "app2@http://localhost:8082/remoteEntry.js",
				app3: "app3@http://localhost:8083/remoteEntry.js",
				portal: "portal@http://localhost:8084/remoteEntry.js",
			},
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
