var config = {
   entry: './src/index.js',
	
   output: {
      path:'/',
      filename: 'app.js',
   },
	
   devServer: {
      inline: true,
      port: 9999
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-2'],
               plugins: ['transform-object-rest-spread']
            }
         }, { 
            test: /\.js$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/,
            query: {
               presets: ['es2015', 'react', 'stage-2']
               // plugins: ['transform-object-rest-spread']
            },
         }, {
            test: /\.sass$/,
            loaders: ["style", "css", "sass"]
         },
      ]
   }
}

module.exports = config;
