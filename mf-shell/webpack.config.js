const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;


module.exports = {
  entry: "./src/index.tsx",
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3000/",
    clean: true,
    uniqueName: "shell",
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },

  resolve: { extensions: [".tsx", ".ts", ".js"] },

  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
    ],
  },

  optimization: { runtimeChunk: false },
  experiments: { topLevelAwait: true },

  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        characters: "characters@http://localhost:3001/remoteEntry.js",
        charDetail: "charDetail@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
