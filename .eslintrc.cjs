module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off', // 禁止使用console
    'no-unused-vars': 'off', // 禁止定义未使用的变量
    'no-debugger': 'error', // 禁止使用debugger
    'no-var': 'error' // 要求使用 let 或 const 而不是 var
  }
}
