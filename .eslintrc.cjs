require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/eslint-config-prettier',
        'prettier',
    ],
    plugins: [
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-var': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-dangle': ['error', 'only-multiline'],
        'id-length': [2, { exceptions: ['i', 'j', '_'] }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
        "vue/no-multiple-template-root": "off",
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
}
