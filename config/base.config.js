//使用

const path  = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [],
}
