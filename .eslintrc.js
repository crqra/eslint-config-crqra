module.exports = {
  plugins: ['@typescript-eslint', 'functional', 'jest', 'jsdoc'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylitic'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'functional/no-expression-statement': [
      'error',
      {
        ignorePattern: ['^C\\.']
      }
    ],
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: false,
        allowArgumentsKeyword: false,
        enforceParameterCount: {
          count: 'exactlyOne',
          ignoreIIFE: true
        }
      }
    ],
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-types': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn'
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        'jest/globals': true
      },
      extends: ['plugin:jest/recommended'],
      rules: {
        'functional/functional-parameters': 'off',
        'functional/no-conditional-statement': 'off',
        'functional/no-expression-statement': 'off',
        'jest/no-alias-methods': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-expect-assertions': 'error',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'error'
      }
    }
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  }
}
