module.exports = {
  mode: "production",
  bail: true,
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].iframe.bundle.js",
    publicPath: "",
  },
  watchOptions: { ignored: /node_modules/ },
  module: {
    rules: [
      { test: /\.m?js$/, type: "javascript/auto" },
      { test: /\.m?js$/, resolve: { fullySpecified: false } },
      {
        test: /\.(mjs|tsx?|jsx?)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-react", { runtime: "automatic" }]],
              plugins: [
                [
                  "babel-plugin-add-react-displayname",
                  {
                    overrides: [
                      {
                        test: /\.(story|stories).*$/,
                        plugins: ["babel-plugin-named-exports-order"],
                      },
                      {
                        test: /\.(cjs|mjs|jsx?)$/,
                        plugins: ["babel-plugin-react-docgen"],
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        type: "asset/inline",
      },
      { test: /\.m?js$/, type: "javascript/auto" },
      { test: /\.m?js$/, resolve: { fullySpecified: false } },
    ],
  },
};
