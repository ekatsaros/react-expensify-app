const path = require('path');

//console.log(path.join(__dirname, 'public'));
//resolve for relative paths
//console.log(path.resolve('./public'));

module.exports = {

	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	module: {
		rules:[{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]//use in order to define an array of loaders 
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true //tell the dev server to serve index.html for all unknown 404s.Handing routing via client side and returnt this page for 404
	}

};

// loader
