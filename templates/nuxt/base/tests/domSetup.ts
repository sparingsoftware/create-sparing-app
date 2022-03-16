import Vue from 'vue'
import { config, RouterLinkStub } from '@vue/test-utils'

// Automatically register all components for unit test mounts just like Nuxt does
import '@/.nuxt/components/plugin'

Vue.config.silent = true

config.stubs.nuxt = { template: '<div />' }
config.stubs['nuxt-link'] = RouterLinkStub
config.stubs['client-only'] = { template: '<span><slot /></span>' }

// @ts-ignore
global.Vue = Vue
