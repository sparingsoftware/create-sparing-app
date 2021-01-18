module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
<% if (programmingLanguage === 'TypeScript') { _%>
    '@nuxtjs/eslint-config-typescript',
<% } else if (programmingLanguage === 'JavaScript') { _%>
    '@nuxtjs',
<% } _%>
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
