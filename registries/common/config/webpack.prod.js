const { merge } = require("webpack-merge");
const crossConfiguration = require("./webpack.common");

const devConfig = {
	mode: "production",
};

module.exports = merge(crossConfiguration, devConfig);
