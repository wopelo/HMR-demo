const path = require('path');
const webpack = require('webpack');
const package = require('./../package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moment = require('moment');

const buildVersion = moment().format('YYYY-MM-DD_HH_mm_ss');

module.exports = {
    entry: path.join(__dirname, '../src/pages/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: package.name + '.js'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            version: buildVersion,
            filename: 'index.html',
            template: path.join(__dirname, '../src/pages/index.html'),
            inject: 'body'
        })
    ],
    externals: {
        'babel-polyfill': 'window'
    },
    devtool: 'source-map'
}