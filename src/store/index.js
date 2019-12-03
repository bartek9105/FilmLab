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
    },
    REMOVE_FAVOURITE: (state, favourite) => {
      state.favourites.splice(favourite, 1)
    }
  },
  actions: {
    removeFavourite: (context, link) => {
      context.commit("REMOVE_FAVOURITE", link)
    }
  },
  modules: {
  }
})
