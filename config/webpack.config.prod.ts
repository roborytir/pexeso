import * as webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { BaseConfig } from './webpack.config.base';
import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

process.traceDeprecation = true;

const config: webpack.Configuration = {
    ...BaseConfig,
    mode: 'production',
    module: { rules: rules(true) },
    plugins: plugins(true),
    optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin() ],
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        },
    },
};


export default [ config ];