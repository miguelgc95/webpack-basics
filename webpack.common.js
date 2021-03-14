const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const babelRules = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
    },
};

const styleRules = {
    test: /\.scss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
};

module.exports = {
    entry: "./src/js/main.js",
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
    module: {
        rules: [babelRules, styleRules],
    },
};
