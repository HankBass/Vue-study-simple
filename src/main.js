import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./registerServiceWorker";
import './plugins/iview.js'
import './plugins/element.js'
import './plugins/axios.js'
import './plugins/VueResource.js'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
