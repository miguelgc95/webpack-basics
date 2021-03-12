const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");


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
    mode: "development",
    entry: "./devel/noIndex.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./template.html"
        })
        ],
    module: {
        rules: [babelRules, styleRules],
    },
};
