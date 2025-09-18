module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // 더 관대한 Vue 규칙
    '@vue/eslint-config-typescript/recommended',
    './.eslintrc-auto-import.json', // auto-import 전역 변수 인식
  ],
  rules: {
    // 기본적인 것들만 체크
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 사용하지 않는 변수는 경고만
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // 타입스크립트 관련 완화
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',

    // Vue 관련 완화
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-unused-vars': 'warn',

    // 코딩 스타일 완화
    'semi': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'indent': 'off',

    // 실제 에러만 체크
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-redeclare': 'error',
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        // Vue 파일에서도 매우 관대하게
        'vue/no-unused-vars': 'warn',
        'vue/valid-v-on': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-indent': 'off',
        'vue/script-indent': 'off',
        'vue/attributes-order': 'off',
      },
    },
  ],
}
