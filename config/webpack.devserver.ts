import { Configuration } from 'webpack-dev-server';
import { BUILD_PATH } from './webpack.config.base';

export const devServerConfig: Configuration = {
    port: 1337,
    contentBase: [ '../src/', '../dist/' ],
    stats: { modules: false },
    hot: true,
    historyApiFallback: true,
};