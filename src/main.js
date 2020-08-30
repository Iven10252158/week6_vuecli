import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.config.productionTip = false;
//套件使用元件方式載入
Vue.component('Loading',Loading);
//套件加入到vue的藍圖內（原型）
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
