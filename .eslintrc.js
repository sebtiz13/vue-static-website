const path = require('path');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-new': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'default-param-last': ["error"],
    'no-case-declarations': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^~', path.resolve(__dirname, './src')]
        ],
        extensions: ['.js', '.vue', '.ts']
      },
    },
  },
  plugins: [
    'gridsome'
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
      extends: [
        'plugin:vue/recommended',
        'plugin:gridsome/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'vue/html-indent': ['error', 2],
        'vue/no-v-html': 'off',
        'import/extensions': 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/explicit-function-return-type': ['error', {
          'allowExpressions': true,
          'allowHigherOrderFunctions': true,
          'allowTypedFunctionExpressions': true,
        }],
      },
    },
    {
      files: '*.vue',
      rules: {
        'class-methods-use-this': 'off',
      },
    },
  ],
};
