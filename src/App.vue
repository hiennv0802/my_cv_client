<template>
  <div id="app">
    <basic-info :basicInfo="basic"></basic-info>
  </div>
</template>

<script>

import BasicInfo from "./components/BasicInfo.vue"
import axios from "axios";

export default {
  name: "app",
  components: {
    BasicInfo
  },
  props: ["basicInfo"],
  data() {
    return {
      info: null,
      basic: null
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
    })
    .catch(e => {
      console.log(e)
    })
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
