import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const buildStyleLoader = (isDev: boolean): webpack.RuleSetRule => {
  return {
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
};
