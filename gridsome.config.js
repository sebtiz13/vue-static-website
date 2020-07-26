// load dotenv
require('dotenv').config();

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
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [
          'fr',
          'en',
        ],
        fallbackLocale: 'en', // fallback language
        defaultLocale: 'fr', // default language
        rewriteDefaultLanguage: false,
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'SitePages', // Required
        baseDir: `${process.env.CONTENT_DIR}/pages`, // Where .md files are located
        route: '/:slug',
        template: './src/templates/SitePages.vue', // Optional
        plugins: [
          'remark-attr',
          unwrapImage,
          ['remark-containers', { default: true }],
        ],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `${process.env.CONTENT_DIR}/blog/**/*.md`,
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
        refs: {
          categories: {
            typeName: 'BlogCategory',
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `${process.env.CONTENT_DIR}/portfolio/**/*.md`,
        typeName: 'Creations',
        remark: {
          slug: false,
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `${process.env.CONTENT_DIR}/conferences/**/*.md`,
        typeName: 'Conferences',
        remark: {
          slug: false,
        },
      },
    },
  ],
  templates: {
    BlogPost: '/blog/:slug',
    BlogCategory: '/blog/category/:title',
  },
  chainWebpack(config) {
    config.resolve.set('symlinks', false);
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
