import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i, // for use scss files
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? MiniCssExtractPlugin.loader : "style-loader",
      // Translates CSS into CommonJS,
      {
        loader: "css-loader",
        options: {
          // for css module
          modules: {
            // auto unique classes is used in only css files names that include .module.
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),

            // naming for unique classes
            localIdentName: options.isDev
              ? "[path][name]__[local]__[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  return [tsLoader, cssLoader];
}
