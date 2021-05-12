module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/no-v-html': 0,
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreImports: true,
        ignoreGlobals: true
      }
    ]
  }
}
