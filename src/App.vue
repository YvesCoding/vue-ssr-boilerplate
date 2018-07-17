<template>
    <div id="app">
        <h1>Vue SSR example with router and vuex</h1>
        <h2>Everytime you visit the route, the count will increase.</h2>
        <div>
            <router-view>
            </router-view>
        </div>
        {{count}}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    count: state => state.count
  })
};
</script>

<style>
</style>
