import webpack from "webpack";
import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { IBuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: IBuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(options),
  };
};
