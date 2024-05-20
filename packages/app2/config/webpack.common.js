/* eslint-disable @typescript-eslint/typedef */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const prefixer = require("postcss-prefix-selector");
const path = require("path");
module.exports = {
	resolve: {
		extensions: [".js", ".tsx", ".jsx", ".ts"],
		alias: {
			"@": path.join(process.cwd(), "src"),
		},
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
			{
				test: /\.s[ac]ss$/i,
				loader: require.resolve("postcss-loader"),
				options: {
					postcssOptions: {
						plugins: [
							prefixer({
								prefix: "#single-spa-application\\:app2",
							}),
						],
					},
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
