<template>
  <div id="app" class="container">
    <basic-info :basicInfo="basic"></basic-info>
    <education-work :educationWork="work"></education-work>
    <skill :skillInfo="skills"></skill>
    <knowledge :knowledgeInfo="knowledge"></knowledge>
    <otherSkill :otherSkillInfo="otherSkill"></otherSkill>
  </div>
</template>

<script>
import BasicInfo from "./components/BasicInfo.vue"
import EducationWork from "./components/EducationWork.vue"
import Skill from "./components/Skill.vue"
import Knowledge from "./components/Knowledge.vue"
import OtherSkill from "./components/OtherSkill.vue"
import axios from "axios";

export default {
  name: "app",
  components: {
    BasicInfo,
    EducationWork,
    Skill,
    Knowledge,
    OtherSkill
  },
  props: ["basicInfo", "educationWork", "skillInfo", "knowledgeInfo", "otherSkillInfo"],
  data() {
    return {
      info: null,
      basic: null,
      work: null,
      skills: {},
      knowledge: {},
    }
  },
  mounted() {
    axios.get("get_data").then(response => {
      this.info = response.data.info;
      this.basic = this.info["basic-info"];
      this.work = this.info["work_schedule"];
      this.skills = this.info["skills"];
      this.knowledge = this.info["knowledge"];
      this.otherSkill = this.info["other_skills"];
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
