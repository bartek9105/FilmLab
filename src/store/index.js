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
    ADD_AND_REMOVE_FAVOURITE: (state, favourite) => {
      if(!state.favourites.includes(favourite)){
        state.favourites.push(favourite)
        Vue.toasted.show('Film added to favourites', options);
      }else{
        state.favourites.splice(favourite, 1)
        Vue.toasted.show('Film removed from favourites', options);
      }
    },
  },
  modules: {
  }
})
