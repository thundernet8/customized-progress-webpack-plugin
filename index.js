"use strict";

// Disable the deprecation warning, popping up in the middle of the process
process.noDeprecation = true;

const CompactLogger = require("./logger/compact-logger");

/**
 * Simple Progress Plugin for Webpack
 *
 */
module.exports = function SimpleProgressWebpackPlugin() {
  return CompactLogger();
};
