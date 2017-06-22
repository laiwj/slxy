/**
 * Created by WangMing on 15/12/9.
 */
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //将组件中的样式乖乖提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插入代码

//webpck插件
var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new HtmlWebpackPlugin({
        title: "avalon webpack gulp spa 实践",
        template: "tpl.html",
        filename: "index.html",
        hash: true
    }),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("css/style.css", {
        allChunks: true,
        disable: false
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
];
var entry = ['./src/main'],
    buildPath = "/dist";
//编译输出路径
module.exports = {
    debug: true,
    entry: entry,
    output: {
        path: __dirname + buildPath,
        filename: 'js/build.js',
        publicPath: '/',
        chunkFilename: "js/[name].chunk.[chunkhash:8].js" //给require.ensure用
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader?sourceMap!cssnext-loader")
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader?name=images/[name].[hash].[ext]"
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader?limit=1000000'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        preLoaders: [{
            test: /\.js$/,
            loader: "require-css-preloader"
        }]
    },

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js', '.css'],
        //别名
        alias: {
            mmRequest: path.join(__dirname, "src/assets/vendor/oniui/mmRequest/mmRequest"),
            mmPromise: path.join(__dirname, "src/assets/vendor/oniui/mmPromise/mmPromise"),
            mmHistory: path.join(__dirname, "src/assets/vendor/oniui/mmRouter/mmHistory"),
            mmRouter: path.join(__dirname, "src/assets/vendor/oniui/mmRouter/mmRouter"),
            mmState: path.join(__dirname, "src/assets/vendor/oniui/mmRouter/mmState"),
            cookie: path.join(__dirname, "src/assets/vendor/oniui/cookie/avalon.cookie"),
            datepicker: path.join(__dirname, "src/assets/vendor/oniui/datepicker/avalon.datepicker"),
            coupledatepicker: path.join(__dirname, "src/assets/vendor/oniui/datepicker/avalon.coupledatepicker"),
            pager: path.join(__dirname, "src/assets/vendor/oniui/pager/avalon.pager"),
            dialog: path.join(__dirname, "src/assets/vendor/oniui/dialog/avalon.dialog"),
            validation: path.join(__dirname, "src/assets/vendor/oniui/validation/avalon.validation"),
            avalon: path.join(__dirname, 'src/assets/vendor/oniui/avalon.shim'), //在正常情况下我们以CommonJS风格引用avalon,以require('avalon')
            '../avalon': path.join(__dirname, 'src/assets/vendor/oniui/avalon.shim'), //由于oniui都以是../avalon来引用avalon的，需要在这里进行别名

            // 第三方的
            validator: path.join(__dirname, "src/lib/validator"),
            SelectControl: path.join(__dirname, "src/lib/select/select"),

        }
    },
    plugins: plugins,
    devtool: '#source-map'
};