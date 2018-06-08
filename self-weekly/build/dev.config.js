const WebpackDevServer = require("webpack-dev-server");
// const app = require('express')();
const webpack = require("webpack");
const path = require("path");
let config = require("./webpack.config")

config.mode = "development";

config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);

// 使用webpack-dev-server

const server = new WebpackDevServer(compiler, {
    historyApiFallback:true,
    hot: true,
    inline: true,
    progress: true,
    port: 80
});

server.listen(80, "127.0.0.1");

// 使用dev-middleware与hot-middleware

// const devMiddleware = require('webpack-dev-middleware')(compiler, {
//     publicPath: config.output.publicPath,
//     quiet: true
// })
//
// const hotMiddleware = require('webpack-hot-middleware')(compiler, {
//     log: false,
//     heartbeat: 2000
// })
//
// app.use(devMiddleware);
// app.use(hotMiddleware);
// app.listen(8080);