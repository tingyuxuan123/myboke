module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    //  'plugin:vue/essential',
    //  'eslint:recommended',
  //  '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing':'off',
    "@typescript-eslint/no-this-alias": 'off',
  }
}


// module.exports = {
//   'root': true,
//   'env': {
//     'browser': true,
//     'es6': true,
//     // "react-native/react-native": true,
//   },
//   "settings": {
//     "react": {
//       "createClass": "createReactClass",
//       "pragma": "React",
//       "version": "detect",
//       "flowVersion": "0.53",
//     }
//   },
//   'extends': [
//     'plugin:react/recommended',
//     "plugin:react-native/all",
//     "plugin:jsx-a11y/recommended",
//     'plugin:@typescript-eslint/recommended',
//     'prettier',
//     'prettier/@typescript-eslint',
//   ],
//   'parser': '@typescript-eslint/parser',
//   'globals': {
//     'Atomics': 'readonly',
//     'SharedArrayBuffer': 'readonly',
//   },
//   'parserOptions': {
//     'ecmaFeatures': {
//       'jsx': true,
//     },
//     'ecmaVersion': 2018,
//     'sourceType': 'module',
//     // 'project': './tsconfig.json',
//   },
//   'plugins': [
//     '@typescript-eslint',
//     'react',
//     "react-native",
//     "jsx-a11y",
//   ],
//   'rules': {
//     '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
//     '@typescript-eslint/explicit-function-return-type': [
//       // 'warn',
//       'off', 
//       {
//         allowExpressions: true, 
//         allowTypedFunctionExpressions: true,
//       }
//     ],
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     '@typescript-eslint/camelcase': ['off', {properties: 'always'}],
//     '@typescript-eslint/no-unused-vars': ['error', {
//       'vars': 'all',
//       'args': 'none',
//       'ignoreRestSiblings': true,
//     }],
//     "react-native/no-color-literals": 0,
//     "react-native/sort-styles": 0,
//     "react-native/no-inline-styles":0,
//   },
// };