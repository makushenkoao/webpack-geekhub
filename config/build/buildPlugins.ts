import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = (
  options: IBuildOptions
): webpack.WebpackPluginInstance[] => {
  const { paths } = options;

  const plugin = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(options.isDev),
    }),
  ];

  if (options.isDev) {
    plugin.push(new webpack.HotModuleReplacementPlugin());
    plugin.push(new ReactRefreshPlugin());
    // plugin.push(new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    // }));
  }

  return plugin;
};
