module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],

  extends: [
    'stylelint-config-standard',
    // 'stylelint-config-standard-scss', //! incompatibility with tailwindcss
    'stylelint-config-prettier',
  ],

  overrides: [
    { files: ['**/*.vue', '**/*.html'], customSyntax: 'postcss-html' },
    { files: ['**/*.scss'], customSyntax: 'postcss-scss' },
    { files: ['**/*.sass'], customSyntax: 'postcss-sass' },
  ],

  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'error',
          'debug',
          'import',
          'use',
          'mixin',
          'include',
          'extend',
          'if',
          'else if',
          'else',
          'for',
        ],
      },
    ],
    'color-hex-case': null,
    'color-hex-length': 'short',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'function-url-quotes': 'always',
    'font-weight-notation': 'numeric',
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['remixicon'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'selector-pseudo-element-colon-notation': 'double',
  },
}
