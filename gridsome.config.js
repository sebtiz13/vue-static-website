const path = require('path');
const fixAnchorAccent = require('./fixAnchorAccent');
const unwrapImage = require('./unwrapImage');

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
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog-content/blog/**/*.md',
        typeName: 'BlogPost',
        remark: {
          plugins: [
            'remark-attr',
            unwrapImage,
            fixAnchorAccent,
            ['remark-autolink-headings', {
              content: {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: 'icon icon-link',
                },
              },
              linkProperties: {
                'aria-hidden': 'true',
              },
            }],
            ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Ocean', skipInline: false }],
          ],
          autolinkHeadings: false,
        },
      },
    },
  ],
  templates: {
    BlogPost: '/:slug',
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
