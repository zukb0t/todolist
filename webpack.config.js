const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = ['index','interface','eventhandlers',
  'projectlist','project','projectproperties','task','taskproperties'];

function makeFiles(config, page){
    config[page] = `./src/${page}.js`;
    return config;
}

module.exports = {
  mode:"development",
  entry: pages.reduce(makeFiles, {}),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do App',
      filename:"index.html",
      template:'./src/index.html'
    }),
  ],
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader'],
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader'],
        },
      ],
    },
};