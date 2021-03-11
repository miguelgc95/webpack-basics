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
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
};

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./devel/noIndex.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [babelRules, styleRules],
    },
};
