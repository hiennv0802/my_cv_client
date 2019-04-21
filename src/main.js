import Vue from "vue"
import App from "./App.vue"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import VueAxios from "vue-axios"
// import {library} from "@fortawesome/fontawesome-svg-core"
// import {faCoffee} from "@fortawesome/free-solid-svg-icons"
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
// import {faFacebookF} from "@fortawesome/fontawesome-free-brands";

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.defaults.baseURL = "http://localhost:3000/"

new Vue({
  render: h => h(App),
}).$mount("#app")
