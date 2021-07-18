//引入
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
const baseConfig = require('./base.config') 
const path  = require('path')

//使用
module.exports = webpackMerge.merge(baseConfig,{  
  plugins: [ 
    new CleanWebpackPlugin (),
  ],
  mode:'production'
})