const path = require("path");
let webpackConfig = require("./config/webpack/" +
  (process.env.NODE_SERVE_ENV || "dev") +
  (process.env.BUILD_ENV ? "." + process.env.BUILD_ENV : "") +
  ".js");

// 根据不同环境读取不同的配置
console.log(
  "[vue.webpack.config] env -> ",
  process.env.NODE_SERVE_ENV,
  process.env.BUILD_ENV
);

let merge = require("webpack-merge");
module.exports = merge(webpackConfig, {
  // 修改antd主题色
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#00aba5",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  }
});

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/style/theme.styl")]
    });
}