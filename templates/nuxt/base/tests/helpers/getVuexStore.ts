import Vuex, { Store } from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

function getVuexStore<T>(pattern: T, storeOverrides: object) {
  const store = new Store(pattern)
  Object.assign(store, storeOverrides)

  return store
}

export default getVuexStore
