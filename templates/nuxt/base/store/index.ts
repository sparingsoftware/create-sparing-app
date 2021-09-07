import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

// Import all your submodules
// import * as submodule from '~/store/submodule'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters = {}

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

// https://typed-vuex.roe.dev/
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    // submodule,
  }
})
