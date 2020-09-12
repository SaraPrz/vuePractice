import Vue from 'vue';
import App from './App.vue';
import routes from './routes';
import './main.scss';
import VueRouter from 'vue-router'


Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
