import Vue from "vue"
import App from "./App.vue"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.defaults.baseURL = "http://localhost:3000/"

new Vue({
  render: h => h(App),
}).$mount("#app")
