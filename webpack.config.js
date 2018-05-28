const path = require("path");
module.exports = {
    // the main file for our js
    entry: "./src/index.js",
    // the output file
    output: {
        // where we want to but our output files
        path: path.resolve(__dirname, "dist"),
        // the name for our main file
        filename: "bundle.js"
    }
}