const path = require("path");
const env = process.env.NODE_ENV;

const config = {
  mode: env || "development",
  entry: {
    index: [path.resolve(__dirname, "src/index.tsx")]
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    modules: [`${__dirname}/src`, "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};

module.exports = config;
