import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
//import login from '../components/LoginForm'


Vue.use(VueRouter)

  //const routes = [
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: Home
  //},
  //{
  //  path: '/about',
  //  name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //},
  //{
  //  path: '/auth',
  //  name: 'Auth',
  //  component: Auth,
  //  meta: {
  //    allowAnonymous : true,
  //  },
  //},
//]

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: {
        allowAnonymous: true
      },
      
      
  }],
  beforeEnter: (to, from, next) => {
        if (!to.meta.allowAnonymous) next({ name: 'Auth' })
        else next()
      }
});

export default router
