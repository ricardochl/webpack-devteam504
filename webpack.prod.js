
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode:'production',
    optimization:{
    usedExports: true,
       minimizer:[
           new OptimizeCssAssetsPlugin(),
           new TerserPlugin()
       ] 
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|mp4)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            esModule: false,
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
             test:/\.css$/,
             exclude: /styles\.css$/,
             use:['style-loader', 'css-loader']
            },
            {
                test: /styles\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CleanWebpackPlugin(),
        new MinifyPlugin(),
        new BundleAnalyzerPlugin()
    ]
}