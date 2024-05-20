const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
	mode: "production",
};

module.exports = merge(commonConfig, devConfig);
