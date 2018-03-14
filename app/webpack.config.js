/// <binding ProjectOpened='Hot' />
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const bundleOutputDir = './dist';

    return {
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        entry: {
            'app': './src/Boot.tsx'
        },
        module: {
            rules: [
                { test: /\.tsx?$/, include: path.resolve(__dirname, "./"), loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader?silent=true'] },
                { test: /\.css$/, use: ExtractTextPlugin.extract({ use: [{loader: isDevBuild ? 'css-loader' : 'css-loader?minimize'}, {loader: 'font-loader'}] }) },
                { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
                { test: /\.(graphql|gql)$/, exclude: /node_modules/, loader: 'graphql-tag/loader'},
                { test: /\.scss$/, use: [{ loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader', options: {includePaths: ['./node_modules']}}]}
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            chunkFilename: '[name].js',
            publicPath: '/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new ExtractTextPlugin('app.css'),
            new CheckerPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin()
                ])
        ,
        devServer: {
            hot: false,
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            historyApiFallback: true
        }
    }
};