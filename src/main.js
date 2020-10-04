import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";

import "@babel/polyfill";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyCMkR7Pb1-LcC61yKIke90Kd8kZvm0Wnwc",
  authDomain: "colasvirtuales.firebaseapp.com",
  databaseURL: "https://colasvirtuales.firebaseio.com",
  projectId: "colasvirtuales",
  storageBucket: "colasvirtuales.appspot.com",
  messagingSenderId: "519796774430",
  appId: "1:519796774430:web:46d5a02a52accd7cc1000f",
  measurementId: "G-M65N2EL1QD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
