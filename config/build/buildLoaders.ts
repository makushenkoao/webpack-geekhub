import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildStyleLoader } from "./loaders/buildStyleLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";

export const buildLoaders = ({
  isDev,
}: IBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = buildStyleLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: ["file-loader"],
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
        plugins: [isDev && require.resolve("react-refresh/babel")].filter(
          Boolean
        ),
      },
    },
  };

  return [svgLoader, fileLoader, typescriptLoader, babelLoader, styleLoader];
};
