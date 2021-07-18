//引入
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
const baseConfig = require('./base.config')
const path  = require('path')

//使用
module.exports = webpackMerge.merge(baseConfig,{ 
  entry: './examples/index.js',
  output: {
    path: path.resolve(process.cwd(),"examples/dist"),
    filename: '[name].[chunkhash:8].[hash].js'
  }, 
  devServer:{ // 配置实时刷新
    contentBase: path.join(__dirname, 'examples/dist'),
    inline:true,
    compress: true,    
    port: 9000,
    proxy: {
      '/api': {
          target: 'http://localhost:8100',
      } 
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }), 
    new CleanWebpackPlugin ()
  ],
  mode:'development'
})