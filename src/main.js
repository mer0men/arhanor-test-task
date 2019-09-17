import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
