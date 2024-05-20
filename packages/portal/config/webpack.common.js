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
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
