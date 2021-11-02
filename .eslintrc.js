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
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
  },

  plugins: ['@typescript-eslint', 'import'],

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/typescript/recommended',
    'prettier',
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

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'import/no-unresolved': 'warn',
    'import/order': [
      'error',
      {
        // 'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],

    '@typescript-eslint/default-param-last': 'warn',
    'default-param-last': 'off',
    // 'multiline-ternary': 'warn',
    'no-constant-condition': 'warn',
    'no-return-await': 'warn',
    'no-undef': 'off', // interferes with unplugin-auto-import //TODO: remove in future
    'no-unused-vars': 'off', // handled by typescript-eslint
    'object-curly-spacing': 'off', // handled by typescript-eslint
    // 'object-property-newline': 'warn',
    'object-shorthand': 'warn',
    'space-before-function-paren': 'off', // handled by typescript-eslint
    'spaced-comment': 'warn',
    'vue/attributes-order': 'warn',
    'vue/component-definition-name-casing': 'warn',
    'vue/component-tags-order': [
      'warn',
      {
        order: ['route', 'script', 'template', 'style'],
      },
    ],
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/new-line-between-multi-line-property': [
      'warn',
      {
        minLineOfMultilineProperty: 4,
      },
    ],
    'vue/no-unused-components': 'warn',
  },
}
