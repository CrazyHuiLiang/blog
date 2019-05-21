const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 同一个文件中不可以同时引用css和scss，scss文件会覆盖掉css的内容
const extractCss = new ExtractTextPlugin("../styles/[name]-bundle.css");
const extractScss = new ExtractTextPlugin("../styles/[name]-bundle.css");

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, "src"),
    entry: {
        'layout': './js/layout.js',
        'post': './js/post.js',
    },
    output: {
        path: path.resolve(__dirname, 'source/scripts'),
        filename: "[name]-bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
            },
            {
                test: /\.scss$/,
                use: extractScss.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        extractCss,
        extractScss,
    ]
};
