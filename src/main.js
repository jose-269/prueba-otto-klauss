import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";


import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login")
  if (to.name !== 'Login' && isAuthenticated !== "logueado") next({ name: 'Login' });
  if (to.name === 'Login' && isAuthenticated === "logueado") next({ name: 'Home' });
  else next()
})

new Vue({
  firebase,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
