/* eslint-disable @typescript-eslint/typedef */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	resolve: {
		extensions: [".js", ".tsx", ".jsx", ".ts"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
