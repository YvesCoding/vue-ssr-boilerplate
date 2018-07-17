export default {
  asyncInc({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload);
    }, 1100);
  }
};
