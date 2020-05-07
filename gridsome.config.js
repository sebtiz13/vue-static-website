const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_globals.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Sebtiz13',
  description: 'This is my world ! Geekeries et délire, en vrai développeur JS/PHP. Fan de Vue.js',
  titleTemplate: 'Sebtiz13 > %s',
  plugins: [
    'gridsome-plugin-typescript',
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
