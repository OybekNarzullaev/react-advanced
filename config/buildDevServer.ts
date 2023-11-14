import { BuildOptions } from "./build/types/config";
import type { Configuration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true, // open automaticly browser when dev server is run
  };
}
