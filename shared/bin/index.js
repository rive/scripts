"use strict";

const start = require("./start");
const build = require("./build");
const test = require("./test");

/**
 * execute rive start/build/test command
 *
 * @param {object} config webpack configuration
 */
function rive(config) {
    const actions = ["start", "build", "test"];
    const action = process.argv[2];

    if (!action || !actions.includes(action)) {
        console.log("Use one of these actions: start, build, test");
        process.abort();
    }

    switch (action) {
        case "build":
            build(config);
            break;
        case "start":
            start(config);
            break;
        case "test":
            test(config);
            break;
    }
}

module.exports = rive;
