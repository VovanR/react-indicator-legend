module.exports = {
	entry: [
		'./example/app.jsx'
	],
	output: {
		path: './example',
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loaders: [
					'babel'
				]
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
};
