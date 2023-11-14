import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    //   mode: "development",
    mode: mode,

    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // default false this is clear all build folder before generate bundles
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
