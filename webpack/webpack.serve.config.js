/* eslint @typescript-eslint/no-var-requires: 0 */
const config = require("./webpack.config.js");
const path = require("path");
const packagejson = require("../package.json");
const dashLibraryName = packagejson.name.replace(/-/g, "_");

config.entry = { main: "./demo/index.ts" };
config.output = {
    filename: `./${dashLibraryName}/output.js`,
    path: path.resolve(__dirname),
};
config.mode = "development";
config.externals = undefined; // eslint-disable-line

module.exports = config;
