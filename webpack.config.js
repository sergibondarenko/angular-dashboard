var webpack = require('webpack');
var path = require('path');

module.exports = { 
    entry: "./app/app.js",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js"
    },  
    module: {
        loaders: [
          {   
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },  
          {   
            test: '/\.js$/',
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            },  
            exclude: /(node_modules|lib)/
          },  
          {   
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass'],
            exclude: /node_modules/
          },  
          {   
            test: /\.html$/,
            loader: 'html',
            exclude: /node_modules/
          }
        ]   
    },
    node: {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
          dns: 'empty'
    },
    resolve: {
      alias: {},
      extensions: ['.js', '.json'],
      modules: [
        'node_modules',
        'lib'
      ]
    }
};
        
