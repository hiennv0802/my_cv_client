<template>
  <div id="app" class="container">
    <basic-info :basicInfo="basic"></basic-info>
    <education-work :educationWork="work"></education-work>
  </div>
</template>

<script>

import BasicInfo from "./components/BasicInfo.vue"
import EducationWork from "./components/EducationWork.vue"
import axios from "axios";

export default {
  name: "app",
  components: {
    BasicInfo,
    EducationWork
  },
  props: ["basicInfo", "educationWork"],
  data() {
    return {
      info: null,
      basic: null,
      work: null
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
      this.work = this.info["work_schedule"];
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
