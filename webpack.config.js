const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

//учим распозновать разные форматы файлов
module.exports = {
    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin()
    ]


}