var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	//开启dev source map
	devtool: 'eval-source-map',
	//开启webpack dev server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},

	module: {
		rules: [{
				test: /\.(js|jsx)?$/,
				loader: ['babel-loader'],
				include: APP_PATH,
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				enforce: "pre",
				include: [APP_PATH], // 指定检查的目录
				options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
					formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
				}
			}
		]
	},
	//配置plugin
	plugins: [
		new HtmlwebpackPlugin({
			title: 'My first react app'
		})
	]
}
