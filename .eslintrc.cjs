module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types':0,
    'no-unused-vars': 'off',
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/jsx-no-undef':[1, { global: true}] //ver aqui esse error
  },
}
