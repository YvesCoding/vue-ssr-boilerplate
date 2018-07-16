<template>
    <div> <router-link to="/comp1">comp1</router-link> comp2</div>    
</template>

<script>
export default {
  asyncData({ store, route }) {
    // After dispatching action,will return Promise
    return store.dispatch('asyncInc', 2);
  }
};
</script>

<style>
</style>
