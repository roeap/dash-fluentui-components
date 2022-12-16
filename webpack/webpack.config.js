/* eslint @typescript-eslint/no-var-requires: 0 */
const options = {
    entry: { main: "./src/index.ts" },
    mode: "production",
};

const config = require("./.config/webpack/base.js")(options);
config.externals["prop-types"] = "PropTypes";

module.exports = config;
