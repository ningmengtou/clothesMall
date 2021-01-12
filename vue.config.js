// 配置文件
module.exports = {
  // 配置文件别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'network':'@/network',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}