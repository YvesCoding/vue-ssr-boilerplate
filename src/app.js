import Vue from 'vue';
import App from './App.vue';
import { createStore } from './store';
import { createRouter } from './router';

export function createApp() {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store };
}
