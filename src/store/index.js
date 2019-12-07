import Vue from 'vue'
import Vuex from 'vuex'
import Toasted from 'vue-toasted'

Vue.use(Vuex)
Vue.use(Toasted)

let options = {
  type : 'show',
  position: 'bottom-center',
  duration: 2000,
  className: ['custom-toast']
}

export default new Vuex.Store({
  state: {
    favourites: []
  },
  mutations: {
    ADD_FAVOURITE: (state, favourite) => {
      if(!state.favourites.includes(favourite)){
        state.favourites.push(favourite)
        Vue.toasted.show('Film added to favourites', options);
      }else{
        Vue.toasted.show('Film is already in favourites', options);
      }
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
