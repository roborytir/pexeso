import { WebpackPluginInstance, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import { resolve } from 'path';
import { IS_ANALYZE_ENABLED } from './webpack.config.base';

export const plugins = (isProduction = false): WebpackPluginInstance[] => {
    // Base Plugins
    const plugins = [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: false,
            template: resolve(__dirname, '../public/index.html'),
            // favicon: resolve(__dirname, 'src/assets/favicon.ico'),
            publicPath: '',
        }),
        new MiniCssExtractPlugin(),
        new SpriteLoaderPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: resolve(__dirname, '../public'),
        //             to: resolve(__dirname,'../dist/public')
        //         },
        //     ]
        // }),
    ];

    if (IS_ANALYZE_ENABLED) {
        plugins.push(new BundleAnalyzerPlugin({
            analyzerPort: 1339,
            openAnalyzer: false
        }));
    }

    // Dev only plugins
    if (!isProduction) {
        plugins.push(new HotModuleReplacementPlugin());
    }
    return plugins;
};
