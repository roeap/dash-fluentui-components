/* eslint consistent-return: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint @typescript-eslint/no-var-requires: 0 */
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const path = require("path");
const packagejson = require("./package.json");
const dashLibraryName = packagejson.name.replace(/-/g, "_");

const serverPort = 3000;

config.entry = { main: "./demo/index.js" };
config.output = {
    filename: `./${dashLibraryName}/output.js`,
    path: path.resolve(__dirname),
};
config.mode = "development";
config.externals = undefined; // eslint-disable-line

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(serverPort, "localhost", (err, _result) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at http://localhost:${serverPort}/`);
});
