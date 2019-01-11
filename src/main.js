import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import "@/registerServiceWorker";
import "@/plugins/iview.js";
import "@/plugins/element.js";
import "@/plugins/axios.js";
import "@/plugins/VueResource.js";
import store from "@/store";
// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== "production") require("@/mock");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
