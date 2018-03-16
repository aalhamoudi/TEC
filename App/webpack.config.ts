import * as Webpack from 'webpack';
import * as path from 'path';

export default function Config(env): Webpack.Configuration  {

    return {
        entry: './index.ts',
        output: {
            path: __dirname,
            filename: 'index.js'
        },
        module: {
            rules: [
                {test: /\.tsx?$/, include: path.resolve(__dirname, "src"), loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader?silent=true'] }
            ]
        }
    };
};
