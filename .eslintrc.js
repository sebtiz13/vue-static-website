const path = require('path');

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'default-param-last': ['error'],
    'no-case-declarations': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^@', path.resolve(__dirname, './src')],
        ],
        extensions: ['.js', '.vue', '.ts', '.d.ts'],
      },
    },
  },
  plugins: [
    'gridsome',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      extends: [
        'plugin:import/typescript',
        'plugin:vue/recommended',
        'plugin:gridsome/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        }],
      },
    },
    {
      files: '*.vue',
      rules: {
        'class-methods-use-this': 'off',
        'vue/no-v-html': 'off',
      },
    },
  ],
};
