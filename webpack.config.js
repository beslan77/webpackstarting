const path = require("path");
const webpack = require('webpack');

module.exports = {
    // the main file for our js
    entry: "./src/index.js",
    // the output file
    output: {
        // where we want to but our output files
        path: path.resolve(__dirname, "dist/assets"),
        // the name for our main file
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    
    devServer: {
      contentBase: './dist',
     hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
