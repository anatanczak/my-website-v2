module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'typescript-eslint/explicit-module-boundary-types': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'no-undef': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-else-return': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    indent: 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        usePrettierrc: false,
        singleQuote: true
      }
    ]
  },
  extends: ['plugin:prettier/recommended']
};
