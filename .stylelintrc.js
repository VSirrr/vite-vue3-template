module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'color-function-notation': null,
    'keyframes-name-pattern': null,
    'value-no-vendor-prefix': null,
  },
}
