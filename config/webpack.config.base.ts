import { resolve } from 'path';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { devServerConfig } from './webpack.devserver';
import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

process.traceDeprecation = true;

export const BUILD_PATH = resolve(__dirname, '../dist');
export const ASSETS_PATH = './assets';
export const IS_ANALYZE_ENABLED = process.argv.some(arg => arg.includes('-analyze'));

export const BaseConfig: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    target: 'web',
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        plugins: [ new TsconfigPathsPlugin() ],
        extensions: [
            '.ts', '.tsx', '.js', '.jsx'
        ]
    },
    performance: { hints: false },
    stats: {
        children: false,
        chunkModules: false,
        modules: false,
        hash: false,
        publicPath: true,
        performance: false,
    },
};

