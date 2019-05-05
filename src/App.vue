<template>
  <div id="app" class="container">
    <basic-info :basicInfo="basic"></basic-info>
    <education-work :educationWork="work"></education-work>
    <skill :skillInfo="skills"></skill>
    <chartjs-radar :labels="labels" :data="dataset" :bind="true"></chartjs-radar>
  </div>
</template>

<script>
import BasicInfo from "./components/BasicInfo.vue"
import EducationWork from "./components/EducationWork.vue"
import Skill from "./components/Skill.vue"
import axios from "axios";

export default {
  name: "app",
  components: {
    BasicInfo,
    EducationWork,
    Skill
  },
  props: ["basicInfo", "educationWork", "skillInfo"],
  data() {
    return {
      info: null,
      basic: null,
      work: null,
      skills: null,
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      dataset: [65, 59, 80, 81, 56, 55, 40]
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
      this.work = this.info["work_schedule"];
      this.skills = this.info["skills"];
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
