const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [
      // (“en” is built into Moment and can’t be removed)
      new MomentLocalesPlugin({
        localesToKeep: ['ru'],
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss";`,
      },
    },
  },
};
