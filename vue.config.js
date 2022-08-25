const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
      configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
  devServer: {
    proxy: {
      '/api': {
        // 目标路径
        target: 'https://www.bilibili.com/',
        // 允许跨域
        changOrigin: true,
        // 重写路由
        // api = https://www.bilibili.com/, 相当于变量赋值, 之后axios中需要用到这个域名时, 只需要用api代替
        pathRewrite: {
           '^/api':''
        }
      }
    }
  }
}