import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(Toasted)

let options = {
  type : 'show',
  position: 'bottom-center',
  duration: 2000,
  className: ['custom-toast']
}

Vue.toasted.register('app_notification', payload => {
        if(!payload.message) {
    	    return "Error"
        }
        return payload.message;
    },
    options
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
