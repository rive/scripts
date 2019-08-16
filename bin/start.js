"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

module.exports = function () {
    const compiler = Webpack(config);
    const port = process.env.PORT || 8080;

    WebpackDevServer.addDevServerEntrypoints(config, config.devServer);

    const server = new WebpackDevServer(compiler, config.devServer);

    server.listen(port, "127.0.0.1", () => {
        console.log("starting rive server on http://localhost:" + port);
    });
}
