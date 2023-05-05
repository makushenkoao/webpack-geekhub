import path from "node:path";
import webpack, { RuleSetRule } from "webpack";
import { buildStyleLoader } from "../config/build/loaders/buildStyleLoader";
import { buildSvgLoader } from "../config/build/loaders/buildSvgLoader";

export default ({
  config,
}): {
  config: webpack.Configuration;
} => {
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.modules.push(path.resolve(__dirname, "../src"));
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push(buildStyleLoader(true));
  config.module.rules.push(buildSvgLoader());
  return config;
};