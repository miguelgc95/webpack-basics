const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

const styleRules = {
    test: /\.scss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
};

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules:[styleRules]
    }
});
