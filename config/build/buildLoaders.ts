import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({
  isDev,
}: IBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.scss$/i,
    use: [
      !isDev ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

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
