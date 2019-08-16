"use strict";

const Webpack = require("webpack");
const config = require("./webpack.config");

module.exports = function () {
    const compiler = Webpack({ ...config, mode: "production" });
    compiler.run();
}
