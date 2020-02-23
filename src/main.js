import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import MyComponents from "./components";
import "./assets/css/style.css";

Vue.config.productionTip = false;

Vue.use(MyComponents);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
