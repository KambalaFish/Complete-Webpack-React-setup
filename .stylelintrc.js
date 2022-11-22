// const lowerCamelCase = '/^[a-z][a-zA-Z0-9]+$/';
const lowerCamelCase = /^[a-z][a-zA-Z0-9]+$/;
// const lowerCamelCase = new RegExp('/^[a-z]+[a-zA-Z0-9]*$/');

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'custom-media-pattern': [
      lowerCamelCase,
      {
        message: (name) => `Expected custom media query name "${name}" to be camelCase`,
      },
    ],
    'custom-property-pattern': [
      lowerCamelCase,
      {
        message: (name) => `Expected custom property name "${name}" to be camelCase`,
      },
    ],
    'keyframes-name-pattern': [
      lowerCamelCase,
      {
        message: (name) => `Expected keyframe name "${name}" to be camelCase`,
      },
    ],
    'selector-class-pattern': [
      lowerCamelCase,
      {
        message: (selector) => `Expected class selector "${selector}" to be camelCase`,
      },
    ],
    'selector-id-pattern': [
      lowerCamelCase,
      {
        message: (selector) => `Expected id selector "${selector}" to be camelCase`,
      },
    ],
    'scss/at-function-pattern': [
      lowerCamelCase,
      {
        message: 'Expected function name to be camelCase',
      },
    ],
    'scss/at-mixin-pattern': [
      lowerCamelCase,
      {
        message: 'Expected mixin name to be camelCase',
      },
    ],
    'scss/dollar-variable-pattern': [
      lowerCamelCase,
      {
        message: 'Expected variable to be camelCase',
      },
    ],
    'scss/percent-placeholder-pattern': [
      lowerCamelCase,
      {
        message: 'Expected placeholder to be camelCase',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': ['never'],
    'declaration-block-no-redundant-longhand-properties': [null],
    'no-invalid-position-at-import-rule': [null],
    'import-notation': ['url'],
    'function-name-case': [null],
  },
};
