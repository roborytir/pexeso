import * as webpack from 'webpack';
import { BaseConfig } from './webpack.config.base';
import { devServerConfig } from './webpack.devserver';
import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

process.traceDeprecation = true;

const config: webpack.Configuration = {
    ...BaseConfig,
    mode: 'development',
    devtool: 'source-map',
    module: { rules: rules(false) },
    plugins: plugins(false),
    devServer: devServerConfig,
};


export default [ config ];