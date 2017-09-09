var webpack = require('webpack');
var path = require('path');

module.exports = { 
    entry: {
      app: ["./src/app/app.js"]
    },
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },  
    module: {
        loaders: [
          {   
            test: '/\.js$/',
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            },  
            exclude: /(node_modules|lib)/
          },  
          {   
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
          },  
          {   
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass'],
            exclude: /node_modules/
          },  
          {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
          },
          {   
            test: /\.html$/,
            loader: 'html-loader',
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
        
