<template>
  <div id="app">
    <basic-info></basic-info>
  </div>
</template>

<script>

import BasicInfo from "./components/BasicInfo.vue"

export default {
  name: "app",
  components: {
    BasicInfo
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
