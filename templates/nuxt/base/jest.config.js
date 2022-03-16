const { defaults: tsjPreset } = require('ts-jest/presets')
const merge = require('lodash/merge')

// Add more modules if you're getting import/export errors
const esModules = ['@nuxtjs', 'nuxt-i18n'].join('|')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = merge(
  {
    setupFilesAfterEnv:  ['<rootDir>/tests/domSetup.ts'],
    collectCoverage: false,
    testEnvironment:'jsdom',
    moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
    watchPathIgnorePatterns: ['node_modules'],
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1',
      '^vue$': 'vue/dist/vue.common.js'
    }
  },
  tsjPreset
)
