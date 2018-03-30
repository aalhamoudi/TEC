const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const isDevBuild = !(env && env.prod);

    return {
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        entry: {
            vendor: [

                'event-source-polyfill',
                'history',
                'firebase',
                'react',
                'react-dom',
                'react-router-dom',
                'mobx-react',
                'font-awesome/css/font-awesome.css',
                'animate.css/animate.min.css',
                'web-animations-js/web-animations.min',
            ],
        },
        module: {
            rules: [
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) },
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
                { test: /\.scss$/, use: [{ loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader', options: {includePaths: ['./node_modules']}}]}
            ]
        },
        plugins: [
            extractCSS,
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve('node-noop')), // Workaround for https://github.com/andris9/encoding/issues/16
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    }
}
