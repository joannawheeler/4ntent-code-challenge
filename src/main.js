import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' ;
import Components from './components';
import './assets/css/style.css'
Vue.config.productionTip = false

Vue.use(Components);
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
