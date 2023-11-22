import { BuildOptions } from "./build/types/config";
import type { Configuration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: false, // open automaticly browser when dev server is run
    historyApiFallback: true, // for found any page when reload browser
  };
}
