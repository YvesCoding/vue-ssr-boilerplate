export default {
  asyncInc({ commit }) {
    setTimeout(() => {
      commit('inc', 1);
    }, 100);
  }
};
