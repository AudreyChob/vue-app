import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueCardCarousel from "vue-card-carousel";
import vMultiselectListbox from 'vue-multiselect-listbox'

Vue.config.productionTip = false
Vue.use(VueCardCarousel)
Vue.component('v-multiselect-listbox', vMultiselectListbox)
import 'vue-multiselect-listbox/dist/vue-multi-select-listbox.css';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
