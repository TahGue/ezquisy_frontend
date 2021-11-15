import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../container/Home.vue';
import Category from '../container/Category.vue';
import Login from '../container/Login.vue';
import Register from '../container/Register.vue';
import AdminQuestion from '../container/AdminQuestion.vue';
import AdminAnswers from '../container/AdminAnswers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../container/Aboutus.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/admin/question',
    name: 'AdminQuestion',
    component: AdminQuestion,
  },

  {
    path: '/admin/answers/:id',
    name: 'AdminAnswers',
    component: AdminAnswers,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const isAuthenticated = localStorage.getItem('token');

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated)
    next({ name: 'Login' });
  else next();
});

export default router;
