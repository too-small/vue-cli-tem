/*
 * @Author: PoJun
 * @Date: 2022-02-25 09:15:23
 * @LastEditors: PoJun
 * @LastEditTime: 2022-06-09 11:35:28
 * @Message: Do not edit
 */
const { resolve } = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin"); //引入插件

module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    devServer: {
        open: true,
        proxy: {
            "/api": {
                target: "https://gf.an-xun.net/bnc_rest",
                pathRewrite: { "^/api": "" },
            },
        },
    },
    css: {
        extract: true,
        // 是否开启 CSS source maps
        sourceMap: false,
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/index.scss";`,
            },
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.css/, // 匹配文件名字
                        threshold: 10240, // 对超过10k的数据进行压缩
                        deleteOriginalAssets: false, // 是否删除源文件
                    }),
                    new CopyWebpackPlugin({
                        patterns: [
                            {
                                from: resolve(__dirname, "static"),
                                to: "static",
                                globOptions: {
                                    dot: true,
                                    gitignore: true,
                                },
                            },
                        ],
                    }),
                ],
            };
        }
    },
};
