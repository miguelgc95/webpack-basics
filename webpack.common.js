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

const htmlLoader = {
    test: /\.html$/i,
    loader: "html-loader"
};

const illo = {
    test: /\.(svg|png|jpg|gif)$/i,
    type: 'asset/resource'
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
        rules: [babelRules, htmlLoader, illo],
    },
};
