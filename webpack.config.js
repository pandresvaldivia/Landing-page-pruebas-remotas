const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const cssMinimizePlugin = require('css-minimizer-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: [miniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/[name][contenthash][ext]',
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name][contenthash][ext]',
				},
			},
		],
	},
	plugins: [
		new htmlPlugin({
			inject: true,
			template: './public/index.html',
			filename: 'index.html',
		}),
		new miniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
		}),
		new copyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', 'assets/images'),
					to: 'assets/images',
				},
				{
					from: path.resolve(__dirname, 'src', 'assets/favicon'),
					to: 'assets/favicon',
				},
				{
					from: path.resolve(__dirname, 'src', 'assets/json'),
					to: 'assets/json',
				},
			],
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new cssMinimizePlugin(), new terserPlugin()],
	},
};
