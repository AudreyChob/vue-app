module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-app/'
    : '/',
    pwa: {
      themeColor: '#000',
    },
}
