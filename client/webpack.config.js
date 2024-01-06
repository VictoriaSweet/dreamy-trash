const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "J.A.T.E.",
        description: "Just Another Text Editor",
        background_color: "#ffffff",
        crossorigin: "anonymous", //can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            size: "500x500",
            purpose: "maskable",
          },
        ],
      }),
      new HtmlWebpackPlugin({
        title: "J.A.T.E.",
        template: "./index.html",
      }),
      new InjectManifest({
        exclude: [/.../, "...", "node_modules"],
        maximumFileSizeToCacheInBytes: 400000,
        swSrc: "./src-sw.js",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
