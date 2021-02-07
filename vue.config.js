const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      // .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('css', resolve('src/assets/css'))
      .set('store', resolve('src/store'))
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:520/',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
