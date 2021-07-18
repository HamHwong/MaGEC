//使用
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        keep_classnames: true,
        mangle: true,
        output: {
          beautify: true,
        },
      },
    }),
  ],
}
