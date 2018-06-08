const app = require('express')();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");
let config = require("./webpack.config")

config.mode = "development";

// 灰常重要
config.entry = [config.entry,'webpack-hot-middleware/client'];

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.NamedModulesPlugin()
)

const compiler = webpack(config);

// 使用dev-middleware与hot-middleware

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
})

const hotMiddleware = webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
})

app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(80);