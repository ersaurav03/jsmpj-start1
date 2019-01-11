import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import About from './views/About.vue'
import signin from './views/signin.vue'
import signup from './views/signup.vue'
import user from './views/user.vue'
import check from './views/check.vue'
import child1 from './views/child1.vue'
import child2 from './views/child2.vue'
import child3 from './views/child3.vue'
import logiin from './views/logiin.vue'
import Products from './views/Products.vue'
// import purchasenow from './components/purchasenow.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    component: Login,
    name:'login',
    children: [
    {
      path:'/child1',
      name:'child1',
      component:child1
    },
    {
      path:'/child2',
      name:'child2',
      component:child2
    },
    {
      path:'/child3',
      name:'child3',
      component:child3
    }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path:'/user',
    name:'user',
    component:user
  },
  {
    path:'/check',
    name:'check',
    component:check
  },
   {
    path:'/logiin',
    name:'logiin',
    component:logiin
   },
   {
    path:'/Products',
    name:'Products',
    component:Products
   }

  ]
})
