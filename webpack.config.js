const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
		vendor: [ 'react', 'react-dom' ]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	mode,
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ]
	},
	module: {
		rules: [
			/**
			 * ESLINT
			 * First, run the linter.
			 * It's important to do this before Babel processes the JS.
			 * Only testing .ts and .tsx files (React code)
			 */
			{
				test: /\.(ts|tsx)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							eslintPath: require.resolve('eslint')
						},
						loader: require.resolve('eslint-loader')
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			},
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			// css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(jpe?g|png)$/i,
				loader: 'file-loader',
				options: {
					hash: 'sha512',
					digest: 'hex',
					name: '[hash].[ext]'
				}
			},
			{
				test: /\.ico$/i,
				loader: 'file-loader',
				options: {
					hash: 'sha512',
					digest: 'hex',
					name: 'favicon.ico'
				}
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }) ]
};
