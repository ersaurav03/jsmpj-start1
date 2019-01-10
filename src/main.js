import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
Vue.config.productionTip = false
Vue.directive('drz', {
 bind(el,binding,vnode){
        el.style.backgroundColor='rgba(255,255,255,0.7)';
 }
});

Vue.directive('drz1', {
 bind(el,binding,vnode){
        el.style.backgroundColor=binding.value;
 }
});

Vue.directive('drz2', {
 bind(el,binding,vnode){
        el.style.color=binding.value;
 }
});
export const eventBus = new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

