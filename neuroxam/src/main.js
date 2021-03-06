// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)


// Vue.prototype.$IsInWriteMode = "mario e tare"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
