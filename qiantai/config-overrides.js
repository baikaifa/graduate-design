/* config-overrides.js */
const {
  override,
  fixBabelImports,
  disableEsLint,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias,
  overrideDevServer,
  watchAll
} = require("customize-cra");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const myPlugin = [
  new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      compress: {
        drop_debugger: true,
        drop_console: true
      }
    }
  })
];
process.env.GENERATE_SOURCEMAP = "false";
module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }),

    // disable eslint in webpack
    disableEsLint(),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1890ff" },
      localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src/"),
      ["utils"]: path.resolve(__dirname, "src/utils/"),
      ["api"]: path.resolve(__dirname, "src/service/api"),
      ["img"]: path.resolve(__dirname, "src/assets/img"),
      ["layouts"]: path.resolve(__dirname, "src/layouts"),
      ["containers"]: path.resolve(__dirname, "src/containers"),
      ["api"]: path.resolve(__dirname, "src/service/api"),
      ["components"]: path.resolve(__dirname, "src/components"),
      ["store"]: path.resolve(__dirname, "src/store"),
      ["xhr"]: path.resolve(__dirname, "src/service/xhr"),
      ["router"]: path.resolve(__dirname, "src/router"),
      ["less"]: path.resolve(__dirname, "src/assets/less"),
      ["img"]: path.resolve(__dirname, "src/assets/img"),
    }),
    config => {
      //暴露webpack的配置 config ,evn
      // 去掉打包生产map 文件
      // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
      console.log(config)
      if (process.env.NODE_ENV === "production") config.devtool = false;
      if (process.env.NODE_ENV !== "development")
        config.plugins = [...config.plugins, ...myPlugin];
      console.log("-----------------上面是plugins--------------------");
      const loaders = config.module.rules.find(rule =>
        Array.isArray(rule.oneOf)
      ).oneOf;
      //添加loader
      loaders.push({
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      });
      console.log(loaders);
      // for (let i = 0; i < config.module.rules[1].oneOf.length; i++) {
      //   console.log(config.module.rules[1].oneOf[i]);
      // }
      return config;
    }
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};