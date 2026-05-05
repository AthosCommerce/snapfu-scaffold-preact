// DO NOT EDIT - THIS FILE CAN/WILL BE REPLACED!!!
// ***********************************************

const webpack = require('webpack');
const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	stats: {
		modulesSort: 'size',
		modulesSpace: 70,
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: 'window.athos = window.athos || {};\nwindow.athos.managed = {{ snapfu.managed }};',
			raw: true,
			entryOnly: true,
		}),
	],
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
		},
	},
};
