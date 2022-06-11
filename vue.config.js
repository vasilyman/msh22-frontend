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
};
