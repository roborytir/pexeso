import { rules } from '../config/webpack.rules';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/**/*.story.@(js|jsx|ts|tsx)'
    ],
    'addons': [ '@storybook/addon-essentials' ],
    webpackFinal: (config: Configuration):Configuration => {
        if (config.module && config.module.rules) {
            config.module.rules = rules(false, true);
        }
        if (config.plugins){
            config.plugins = [
                ...config.plugins,
                new SpriteLoaderPlugin(),
            ];
        }
        if (config.resolve && config.resolve.plugins){
            config.resolve.plugins = [ new TsconfigPathsPlugin() ];
        }
        config.stats = {
            children: false,
            chunkModules: false,
            modules: false,
            hash: false,
            publicPath: true,
            performance: false,
        };

        return config;
    },
};