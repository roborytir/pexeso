/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    plugins: [ '@typescript-eslint', 'react-hooks' ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off',
        'linebreak-style': 0,
        'max-len': [ 'warn', 120 ],
        'import/prefer-default-export': 0,
        'comma-dangle': [ 'error', 'only-multiline' ],
        'semi': [ 'error', 'always' ],
        'quotes': [ 'error', 'single' ],
        'no-unused-vars': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'arrow-body-style': 0,
        'indent': [ 'error', 4 ],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'no-multi-spaces': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': true } ],
        'object-curly-newline': [
            'error', {
                'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
                'ObjectPattern': { 'multiline': true },
                'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
                'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
            }
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'function-paren-newline': [ 'error', { 'minItems': 3 } ],
        'key-spacing': [ 'error', { 'afterColon': true } ],
        'dot-location': [ 'error', 'property' ],
        'array-element-newline': [ 'error', 'consistent' ],
        'array-bracket-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 3
            }
        ],
        'keyword-spacing': [ 'error', { 'after': true, 'before': true } ],
        'func-call-spacing': [ 'error', 'never' ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error'
    },
    // Solves import issues
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.d.ts'
                ]
            }
        },
        react: { version: 'detect' }
    },
};
