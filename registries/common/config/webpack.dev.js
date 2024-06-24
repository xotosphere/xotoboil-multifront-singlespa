const { merge } = require("webpack-merge");
const crossConfiguration = require("./webpack.common");

const devConfig = {
	mode: "development",
	watch: true,
};

module.exports = merge(crossConfiguration, devConfig);
