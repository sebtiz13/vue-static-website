const path = require('path');

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  extends: [
    'airbnb-base',
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-underscore-dangle': 'off',
    'no-return-assign': ['error', 'always'],
    'no-new': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'default-param-last': ["error"],
    'no-case-declarations': 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^~', path.resolve(__dirname, './src')]
        ],
        extensions: ['.js', '.vue']
      }
    }
  },
  plugins: [
    'gridsome'
  ]
};
