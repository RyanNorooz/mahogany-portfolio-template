module.exports = {
  root: true,

  ignorePatterns: [
    '**/*.min.*',
    'components.d.ts',
    'auto-imports.d.ts',
    '!.cz-config.js',
  ],

  env: {
    node: true,
    browser: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
    },
    sourceType: 'module',
    ecmaVersion: 2021,
  },

  plugins: [
    '@typescript-eslint',
    'import',
  ],

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/typescript/recommended',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },

  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
  }],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'import/no-unresolved': 'warn',
    'import/order': ['error', {
      // 'newlines-between': 'always',
      groups: [
        ['builtin', 'external'],
        ['internal', 'parent', 'sibling', 'index'],
      ],
    },
    ],

    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/consistent-type-imports': ['warn', {
      disallowTypeAnnotations: false,
    }],
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/keyword-spacing': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    '@typescript-eslint/space-before-function-paren': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    // '@typescript-eslint/indent': 'warn', //! https://github.com/typescript-eslint/typescript-eslint/issues/1824

    'array-bracket-spacing': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'off', // handled by typescript-eslint
    'comma-style': 'warn',
    curly: 'warn',
    'default-param-last': 'off',
    'eol-last': 'warn',
    indent: ['warn', 2, { SwitchCase: 1 }],
    'key-spacing': 'warn',
    'keyword-spacing': 'off', // handled by typescript-eslint
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // 'multiline-ternary': 'warn',
    'no-constant-condition': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-return-await': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'off', // disabled due to interference with unplugin-auto-import plugin
    'no-unused-vars': 'off', // handled by typescript-eslint
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': 'warn',
    'object-curly-spacing': 'off', // handled by typescript-eslint
    // 'object-property-newline': 'warn',
    'object-shorthand': 'warn',
    'operator-linebreak': 'warn',
    'quote-props': ['warn', 'as-needed'],
    quotes: 'off', // handled by typescript-eslint
    'semi-spacing': 'warn',
    semi: ['warn', 'never', {
      beforeStatementContinuationChars: 'always',
    }],
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'off', // handled by typescript-eslint
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'spaced-comment': 'warn',
    'vue/attributes-order': 'warn',
    'vue/component-definition-name-casing': 'warn',
    'vue/component-tags-order': ['warn', {
      order: ['route', 'script', 'template', 'style'],
    }],
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/max-attributes-per-line': ['warn', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/new-line-between-multi-line-property': ['warn', {
      minLineOfMultilineProperty: 4,
    }],
    'vue/no-multi-spaces': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/singleline-html-element-content-newline': ['warn', {
      ignoreWhenNoAttributes: true,
      ignores: ['option', 'label'],
    }],
    // 'padded-blocks': 'warn',
    // 'padding-line-between-statements': ['warn',
    //   {blankLine: 'always', prev: 'import', next: '*'}, // every import statement
    //   {blankLine: 'never', prev: 'import', next: 'import'}, // ignore consecutive imports
    //   {blankLine: 'always', prev: '*', next: 'if'}, // every if statement
    //   {blankLine: 'any', prev: 'if', next: 'if'} // ignore consecutive if statement
    // ],
  },
}
