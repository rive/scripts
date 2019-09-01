#!/usr/bin/env node

/*
 * rive - command line tool to execute rive tasks
 */

const rive = require("@rive/shared/bin");
const config = require("./webpack.config");

rive(config);
