import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import { RuleSetRule } from 'webpack';
import { ASSETS_PATH } from './webpack.config.base';

export const rules = (isProduction = false, storybook = false): RuleSetRule[] =>[
    {
        test: /\.ts(x)?$/,
        use: [ 'babel-loader', 'ts-loader' ],
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        use: [
            isProduction
                ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: ASSETS_PATH }
                }
                : 'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: { localIdentName: '[name]-[local]-[hash:base64:8]' }
                }
            },
            {
                loader: 'postcss-loader',
                options: { postcssOptions: { config: resolve(__dirname, '../postcss.config.js') } }
            },
        ]
    },
    {
        oneOf: [
            {
                test: /\.svg$/,
                resourceQuery: /sprite/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            spriteFilename: (svgpath: string) => {
                                const path = svgpath.replace(/\\/g, '/');
                                const fileName = path.match(/(?<=assets\/).*(?=\/)/);
                                if (fileName && fileName[0]) {
                                    return `sprites/${fileName[0]}-sprite.svg`;
                                }
                                return 'sprites/assets-sprite.svg';
                            },
                            extract: true,
                            outputPath: ASSETS_PATH,
                            publicPath: ASSETS_PATH,
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: false },
                                { cleanupIDs: false },
                                { removeStyleElement: true },
                                { removeUselessStrokeAndFill: true },
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|ico|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: ASSETS_PATH,
                        publicPath: ASSETS_PATH,
                        name: (resourcePath: string) => {
                            const path = resourcePath.replace(/\\/g, '/');
                            const fileName = path.match(/(?<=assets\/).*$/);
                            if (fileName && fileName[0]) {
                                return fileName[0];
                            }
                            return '[folder]/[name].[ext]';
                        }
                    }
                }
            },
        ]
    },

];