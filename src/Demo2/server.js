var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(8080, "0.0.0.0", function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at localhost:8080');
});