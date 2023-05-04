let proxyObj={}
//与8081建立接口
proxyObj['/']={
  //websocket
  ws:false,
  //目标地址
  target:'http://localhost:8090',
//发送请求头host会被设置为target
  changeOrigin:true,
//不重写请求地址
  pathRewrite:{
    '^/':'/'
  }
}

const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true
})

//通过node.js代理转发到8081
module.exports={
  devServer:{
    host:'localhost',
    port:8079,
    proxy:proxyObj
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },

}