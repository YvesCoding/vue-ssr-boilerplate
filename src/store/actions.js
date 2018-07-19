import { resolve } from 'path';

export default {
  asyncInc({ commit }, payload) {
    return new Promise((resolve, reject) => {
      console.log('Fetching data...');

      setTimeout(() => {
        console.log('Fetched...');

        commit('inc', payload);
        resolve();
      }, Math.random() * 1000);
    });
  }
};
