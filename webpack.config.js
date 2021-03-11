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

module.exports = {
    module: {
        rules: [babelRules],
    },
};
