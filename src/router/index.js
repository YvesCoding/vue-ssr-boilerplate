import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        redirect: '/comp1'
      },
      {
        path: '/comp1',
        component: () => import('../components/comp1.vue')
      },
      {
        path: '/comp2',
        component: () => import('../components/comp2.vue')
      }
    ]
  });
}
