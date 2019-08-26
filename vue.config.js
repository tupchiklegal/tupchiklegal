module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            // 'style-loader',
            // 'css-loader',
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ]
        },
      ]
    }
  }
}