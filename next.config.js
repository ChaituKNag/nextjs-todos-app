const withCss = require('@zeit/next-css');
const webpack = require('webpack');
require('dotenv').config();

module.exports = withCss({
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]'
        }
      }
    });

    // Hack from here: https://pusher.com/tutorials/chat-sentiment-analysis-nextjs#setting-environment-variables
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    // Hack ends here.

    return config
  }
})