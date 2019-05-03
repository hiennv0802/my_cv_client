<template>
  <div id="app" class="container">
    <basic-info :basicInfo="basic"></basic-info>
    <education-work :educationWork="work"></education-work>
    <skill :skillInfo="skills"></skill>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>

import BasicInfo from "./components/BasicInfo.vue"
import EducationWork from "./components/EducationWork.vue"
import Skill from "./components/Skill.vue"
import axios from "axios";
import Chart from "chart.js";
import planetChartData from "./chart-data.js";

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
      planetChartData: planetChartData
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
      this.work = this.info["work_schedule"];
      this.skills = this.info["skills"];
    }),
    this.createChart('planet-chart', this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
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
