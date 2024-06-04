const webpack = require('webpack');
const { merge } = require('webpack-merge');
const terserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    plugins: [
        new terserWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});