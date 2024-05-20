/* eslint-disable @typescript-eslint/typedef */
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
__webpack_base_uri__ = "http://localhost:8080";

const devConfig = {
	mode: "development",

	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html",
		},
		historyApiFallback: { rewrites: [{ from: /./, to: "/index.html" }] },
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "shell",
			filename: "remoteEntry.js",
			remotes: {
				app1: "app1@http://localhost:8081/remoteEntry.js",
				app2: "app2@http://localhost:8082/remoteEntry.js",
				app3: "app3@http://localhost:8083/remoteEntry.js",
				portal: "portal@http://localhost:8084/remoteEntry.js",
			},
			shared: [
				{
					...deps,
				},
			],
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
