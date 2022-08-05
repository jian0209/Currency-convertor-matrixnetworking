module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin']
      }
    ],

    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [':export']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-/']
      }
    ],
    'font-family-no-missing-generic-family-keyword': [true],
    'selector-list-comma-newline-after': 'always-multi-line',
    'no-descending-specificity': null
  }
}
