import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types/config";

export const buildDevServer = (
  options: IBuildOptions
): DevServerConfiguration => {
  return {
    port: options.port,
    hot: true,
    open: true,
  };
};
