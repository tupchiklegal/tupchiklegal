module.exports = {
  configureWebpack: config => {
    config.watchOptions = {
      poll: true,
      ignored: /node_modules/
    }
  }
}