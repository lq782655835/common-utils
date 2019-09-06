module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/common-utils/'
  : '/',
  chainWebpack: config => {
    // 移除 压缩 插件
    config.optimization.minimize(false);
  }
}
