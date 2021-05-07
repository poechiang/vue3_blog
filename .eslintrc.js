module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        // "plugin:vue/vue3-essential",
        'eslint:recommended',
        '@vue/typescript/recommended',
        // "@vue/prettier",
        '@vue/prettier/@typescript-eslint',
        // "plugin:vue/vue3-recommended",
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            tsx: true,
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/ban-types': 'off',
        ignoreRestArgs: 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        indent: ['error', 4],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],

    parser: 'vue-eslint-parser',
};
