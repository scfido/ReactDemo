var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: [
        "webpack-dev-server/client?http://127.0.0.1:8080", // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve(__dirname, 'app/main')
    ],
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/app'),
        publicPath: "http://127.0.0.1:8080/app/",
        filename: 'bundle.js',
    },

    module: {
        preLoaders: [
            //{
            //    test: /\.js$/,
            //    exclude: /node_modules/,
            //    loader: 'jsxhint'
            //}
        ],
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app') 
            },
            {
                test: /\.css$/,
                loader: "style!css"
                //loaders: ["style","css"]
            }
        ],
        resolve: {
            alias: {
                'react': pathToReact
            }
        }
    },
    resolve: {
        extensions: ['', '.jsx', ".js",'.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        //"react": "React",    //不打包React.js
        //"react-dom": "ReactDOM"    //不打包React.js
    }
};