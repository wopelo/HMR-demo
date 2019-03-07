const webpack = require('webpack')
const config = require('./webpack.config.js')

config.mode = "development";

config.devServer = {
    historyApiFallback:true,
    // hot参数控制更新是否刷新整个页面
    hot: true,
    inline: true,
    port: 80
}

// 也一定要加上HotModuleReplacementPlugin
config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
)

module.exports = config;