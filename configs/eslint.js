module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  globals: {
    process: 'readonly',
  },
  rules: {
    'array-callback-return': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'warn',
    curly: ['warn', 'multi-line'],
    'default-param-last': 'error',
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-div-regex': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'warn',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'warn',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    radix: 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'vars-on-top': 'warn',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'after'],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.js', '*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
}
