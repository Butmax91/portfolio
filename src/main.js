import Vue from 'vue';
import App from './App';
import store from './store';

import  'bootstrap';
import  '@fortawesome/fontawesome-free/js/all';
import Separator from './common/Separator.vue';
import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll);
import scrollPage from './common/directives/scrollPage';

Vue.directive('scrollPage', scrollPage);

Vue.config.productionTip = false;
Vue.component('Separator', Separator);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
