const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = require('./config').entry;

function handleFile(entry) {
    let js = {};
    let html = [];
    entry.map(item => {
        js[item] = `./js/${item}`;
        html.push(new HtmlWebpackPlugin({
            template: `./page/${item}.html`,
            filename: `./page/${item}.html`,
            chunks: [item],
            inject: 'body'
        }))
    });
    return {
        js,
        html
    }
}
const f = handleFile(entry);

module.exports = {
    mode: 'production',
    entry: f.js,
    output: {
		path: path.join(__dirname, './pingan_iot'), // 出口目录，pingan_iot文件
		publicPath: '/pingan_iot/',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: '/image', // 图片输出的路径
                        name: '[hash:8].[name].[ext]',
                        limit: 10 * 1024 // <10kb 使用base64
                    }
                }
            }, {
                test: /\.(ttf|TTC|OTF)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, './lib'),
                to: path.join(__dirname, './pingan_iot/lib')
            }, {
                from: path.join(__dirname, './image'),
                to: path.join(__dirname, './pingan_iot/image')
            }]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css"
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production')
        })
    ].concat(f.html),
    resolve: {},
    externals: {
        jquery: 'jQuery'
    },
    optimization: {
        minimizer: [
            // 压缩js
            new TerserPlugin({
                parallel: true
            }),
            // 压缩css
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};