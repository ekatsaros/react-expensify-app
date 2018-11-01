const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//console.log(path.join(__dirname, 'public'));
//resolve for relative paths
//console.log(path.resolve('./public'));

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');


	return {

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
			use: CSSExtract.extract({
				use: [
					{
						loader: 'css-loader', // switch it to object to add options and enable source map for css wich is disabled bu default
						options: {
							sourceMap: true
						}
					},
					{
					loader: 'sass-loader',
					options:{
						sourceMap: true,													
						}
					}
				]
			})
		}]
	},
	plugins: [
		CSSExtract
	],
	devtool: isProduction ? 'source-map' : 'inline-source-map', // source map takes long to build but suited for production and not loaded only when open dev tools
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true //tell the dev server to serve index.html for all unknown 404s.Handing routing via client side and returnt this page for 404
	}

 };
};



// loader
