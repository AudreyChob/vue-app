import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
//import login from '../components/LoginForm'


Vue.use(VueRouter)



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

      beforeEnter: (to, from, next) => {
        console.log("ok");
        console.log(to.query)
        if (to.query.login === "admin" && to.query.password === "admin") next ();
        else if (to.query.login === '' || to.query.password === ""){
          alert("Login ou mot de passe manquant.");
        }
        else {
          alert ("Erreur de l'authentification!")
          next("/")
        }
      }  
  }],
});

export default router
