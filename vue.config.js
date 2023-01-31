const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,   //关闭eslint检查
  transpileDependencies: true,
  devServer: {         // 解决默认打开 0.0.0.0的问题
    open: true,
    host: 'localhost',
    port: 8080
  }
})
