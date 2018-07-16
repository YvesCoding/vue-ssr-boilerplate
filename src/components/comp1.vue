<template>
    <div>comp1 <router-link to="/comp2">comp2</router-link></div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // After dispatching action,will return Promise
    return store.dispatch('asyncInc', 1);
  }
};
</script>

<style>
</style>
