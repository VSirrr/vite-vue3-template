module.exports = {
  root: true,
  env: { node: true },
  parser: 'vue-eslint-parser',
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
}
