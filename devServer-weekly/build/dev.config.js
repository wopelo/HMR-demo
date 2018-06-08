const webpack = require('webpack')
const config = require('./webpack.config.js')

config.mode = "development";

config.devServer = {
    historyApiFallback:true,
    hot: true,
    inline: true,
    progress: true,
    port: 80
}

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.NamedModulesPlugin()
)

module.exports = config;