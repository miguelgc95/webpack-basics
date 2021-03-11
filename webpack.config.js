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

const path = require("path");

module.exports = {
    entry: "./devel/noIndex.js",
    output: {
        filename: "you.js",
        path: path.resolve(__dirname, "hey")
    },
    module: {
        rules: [babelRules],
    },
};
