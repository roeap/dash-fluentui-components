const path = require("path");

const packagejson = require("../package.json");

const dashLibraryName = packagejson.name.replace(/-/g, "_");

module.exports = (options = {}) => {
    const babel = options.babel || undefined;
    const entry = options.entry || [];
    const mode = options.mode || "development";
    const ts = options.ts || {};

    // const overrides = module.exports || {};

    console.log("********** Webpack Environment Overrides **********");
    console.log("options", JSON.stringify(options));

    let filename = (options.output || {}).filename;
    if (!filename) {
        const modeSuffix = mode === "development" ? "dev" : "min";
        filename = `${dashLibraryName}.${modeSuffix}.js`;
    }

    console.log(entry);

    return {
        // entry: {
        //     bundle: entry.concat(['./src/index.ts']),
        //     demo: entry.concat(['./src/demo/index.html', './src/demo/index.tsx'])
        // },
        entry,
        mode: mode,
        output: {
            path: path.resolve(__dirname, `./../${dashLibraryName}`),
            // chunkFilename: '[name].js',
            filename: filename,
            library: dashLibraryName,
            libraryTarget: "window",
        },
        // output: {
        //     path: path.resolve(__dirname, dashLibraryName),
        //     filename,
        //     library: dashLibraryName,
        //     libraryTarget: 'window',
        // },
        devtool: "source-map",
        externals: {
            react: "React",
            "react-dom": "ReactDOM",
            "plotly.js": "Plotly",
        },
        module: {
            rules: [
                {
                    test: /demo[/\\]index.html?$/,
                    loader: "file-loader?name=index.[ext]",
                },
                {
                    test: /\.csv$/,
                    loader: "raw-loader",
                },
                {
                    test: /\.md$/,
                    loader: "raw-loader",
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "babel-loader", options: babel },
                        { loader: "ts-loader", options: ts },
                    ],
                },
                {
                    test: /\.js(x?)$/,
                    exclude: /node_modules/,
                    use: [{ loader: "babel-loader", options: babel }],
                },
                {
                    test: /\.less$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "less-loader" },
                    ],
                },
                // Supposedly injects css as a style tag into the document head - ref: https://github.com/plotly/dash/blob/dev/components/dash-core-components/webpack.config.js
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                insert: function insertAtTop(element) {
                                    var parent = document.querySelector("head");
                                    var lastInsertedElement =
                                        window._lastElementInsertedByStyleLoader;

                                    if (!lastInsertedElement) {
                                        parent.insertBefore(
                                            element,
                                            parent.firstChild
                                        );
                                    } else if (
                                        lastInsertedElement.nextSibling
                                    ) {
                                        parent.insertBefore(
                                            element,
                                            lastInsertedElement.nextSibling
                                        );
                                    } else {
                                        parent.appendChild(element);
                                    }
                                    window._lastElementInsertedByStyleLoader =
                                        element;
                                },
                            },
                        },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
            ],
        },
        resolve: {
            alias: {
                demo: path.resolve("./src/demo"),
                "dash-argus-components": path.resolve("./src"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: 'async',
        //         name: true,
        //         cacheGroups: {
        //             async: {
        //
        //             }
        //         }
        //     }
        // }
    };
};
