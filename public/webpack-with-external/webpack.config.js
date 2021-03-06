var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    entry: './main.js'
  }
};

config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'dist'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name].js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
};

config.module = {
  loaders: [
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.png$/,
      loader: "url-loader",
      query: { mimetype: "image/png" }
    }
  ]
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.js', '.jsx'],
  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  modulesDirectories: [ 'node_modules' ], //, 'bower_components' ],
};

config.plugins = [
  new webpack.ProvidePlugin({
      jquery: 'jquery',
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
  })
];

