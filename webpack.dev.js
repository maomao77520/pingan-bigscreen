const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
console.log(f)
module.exports = {
    mode: 'development',
    entry: f.js,
    output: {
        path: path.join(__dirname, './dist'), // 出口目录，dist文件
        publicPath: '/',
        filename: 'js/[name].js'
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
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 10 * 1024 // <10kb 使用base64
                    }
                }
            }, {
                test: /\.(ttf|TTC)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: path.join(__dirname, './lib'),
        //         to: path.join(__dirname, './dist/lib')
        //     }, {
        //         from: path.join(__dirname, './page'),
        //         to: path.join(__dirname, './dist/page')
        //     }, {
        //         from: path.join(__dirname, './font'),
        //         to: path.join(__dirname, './dist/font')
        //     }, {
        //         from: path.join(__dirname, './image'),
        //         to: path.join(__dirname, './dist/image')
        //     }]
        // }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development')
        })
    ].concat(f.html),
    resolve: {},
    externals: {
        jquery: 'jQuery'
    },
    devServer: {
        port: 8020,
        host: '0.0.0.0',
        // contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
};