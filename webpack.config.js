module.exports = {
	entry: './example/app.jsx',
	output: {
		path: './example',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel'
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
