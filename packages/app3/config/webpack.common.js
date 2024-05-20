/* eslint-disable @typescript-eslint/typedef */

const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const prefixer = require("postcss-prefix-selector");

module.exports = {
	resolve: {
		extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".jso n "],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
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
								prefix: "#single-spa-application\\:app3",
							}),
						],
					},
				},
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "async",
		},
	},
};
