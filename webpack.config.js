const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  exclude: "/node_modules/",
  options: {
    presets: [
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/preset-env"
    ],
  }
};

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
};

const ruleForImages = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    name: "[contenthash].[ext]"
  }
};

const ruleForSvg = {
  test: /\.svg$/,
  use: [
    {
      loader: "svg-url-loader",
      options: {
        limit: 10000,
      },
    },
  ],
};

const ruleForFiles = {
  test: /\.pdf$/,
  loader: "file-loader",
  options: {
    name: "[name].[ext]"
  }
};

module.exports = (env, args) => {
  const { mode } = args;
  const isProduction = mode === "production";


  return {
    mode: isProduction ? "production" : "development",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: [
        ruleForJavascript,
        ruleForStyles,
        ruleForImages,
        ruleForFiles,
        ruleForSvg,
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html"}),

    ],
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      client: {
        overlay: true,
      },
    },
    devtool: "source-map",
  };
};