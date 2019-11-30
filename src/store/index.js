import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: []
  },
  mutations: {
    ADD_FAVOURITE: (state, favourite) => {
      state.favourites.push(favourite)
    }
  },
  actions: {

  },
  modules: {
  }
})
