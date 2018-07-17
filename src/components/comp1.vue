<template>
  <div>comp1
    <router-link to="/comp2">comp2</router-link>
    <div v-for="item in num" :key="item">{{item}}</div>
    <button @click="AddOne">Add One</button>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // After dispatching action,will return Promise
    return store.dispatch('asyncInc', 1);
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    AddOne() {
      this.num++;
    }
  }
};
</script>

<style>
</style>
