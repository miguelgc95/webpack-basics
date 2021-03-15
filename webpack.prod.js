const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const styleRules = {
    test: /\.scss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
};

module.exports = merge(common, {
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ],
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash].[ext]",
        clean: true,
    },
    module: {
        rules: [styleRules],
    },
});
