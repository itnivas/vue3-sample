<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/">About</router-link> |
      <router-link to="/">Contact</router-link>
    </nav>
    <!-- <measurement></measurement> -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Measurement from './views/Measurement.vue';

export default {
  name: 'App',
  components: {
    Measurement,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
