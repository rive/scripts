#!/usr/bin/env node

/*
 * rive - command line tool to execute rive tasks
 */

"use strict";

const start = require("./start");
const build = require("./build");
const test = require("./test");

const actions = ["start", "build", "test"];
const action = process.argv[2];

if (!action || !actions.includes(action)) {
    console.log("Use one of these actions: start, build, test");
    process.abort();
}

switch (action) {
    case "build":
        build();
        break;
    case "start":
        start();
        break;
    case "test":
        test();
        break;
}
