"use strict";

const Webpack = require("webpack");

/**
 * build web app
 *
 * @param {object} config webpack configuration
 */
function build(config) {
    const compiler = Webpack({ ...config, mode: "production" });
    compiler.run();
}

module.exports = build;
